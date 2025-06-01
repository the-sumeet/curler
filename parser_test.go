package main

import (
	"errors"
	"testing"
)

func TestParse_EmptyString(t *testing.T) {

	var testData = []struct {
		input    string
		expected struct {
			tokens []Token
			err    error
		}
	}{
		{
			input: "curl --request GET https://example.com",
			expected: struct {
				tokens []Token
				err    error
			}{
				tokens: []Token{
					{
						Value: "curl", IsOption: false, RequiresArg: false, Index: 0, IsUrl: false,
					},
					{
						Value: "--request", IsOption: true, RequiresArg: true, Index: 1, IsUrl: false,
					},
					{
						Value: "GET", IsOption: false, RequiresArg: false, Index: 2, IsUrl: false,
					},
					{
						Value: "https://example.com", IsOption: false, RequiresArg: false, Index: 3, IsUrl: true,
					},
				},
				err: nil,
			},
		},
		{
			input: "curl -X GET https://example.com",
			expected: struct {
				tokens []Token
				err    error
			}{
				tokens: []Token{},
				err:    errors.New("Short curl options are not supported: -X"),
			},
		},
		{
			input: "--request GET https://example.com",
			expected: struct {
				tokens []Token
				err    error
			}{
				tokens: []Token{},
				err:    errors.New("Command must start with 'curl'"),
			},
		},
		{
			input: "curl --request GET https://example.com https://example1.com",
			expected: struct {
				tokens []Token
				err    error
			}{
				tokens: []Token{
					{
						Value:       "curl",
						IsOption:    false,
						RequiresArg: false,
						Index:       0, IsUrl: false,
					}, {
						Value:       "--request",
						IsOption:    true,
						RequiresArg: true,
						Index:       1, IsUrl: false,
					},
					{Value: "GET", IsOption: false, RequiresArg: false, Index: 2, IsUrl: false},
					{Value: "https://example.com", IsOption: false, RequiresArg: false, Index: 3, IsUrl: true},
					{Value: "https://example1.com", IsOption: false, RequiresArg: false, Index: 4, IsUrl: true},
				},
				err: nil,
			},
		},
		{
			input: "curl --request GET https://example.com",
			expected: struct {
				tokens []Token
				err    error
			}{
				tokens: []Token{},
				err:    errors.New("Command must start with 'curl'"),
			},
		},
	}

	for _, td := range testData {
		tokens, err := parse(td.input)
		if err != nil && td.expected.err == nil {
			t.Errorf("Unexpected error for input %q: %v", td.input, err)
		}
		if err == nil && td.expected.err != nil {
			t.Errorf("Expected error for input %q, but got none", td.input)
		}
		if err != nil && td.expected.err != nil && err.Error() != td.expected.err.Error() {
			t.Errorf("Expected error %q for input %q, but got %q", td.expected.err.Error(), td.input, err)
		}
		if len(tokens) != len(td.expected.tokens) {
			t.Errorf("Expected %d tokens for input %q, but got %d", len(td.expected.tokens), td.input, len(tokens))
			continue
		}
		for i, token := range tokens {
			if token.Value != td.expected.tokens[i].Value {
				t.Errorf("Expected token value %q at index %d for input %q, but got %q", td.expected.tokens[i].Value, i, td.input, token.Value)
			}
			if token.IsOption != td.expected.tokens[i].IsOption {
				t.Errorf("Expected IsOption %v at index %d for input %q, but got %v", td.expected.tokens[i].IsOption, i, td.input, token.IsOption)
			}
			if token.RequiresArg != td.expected.tokens[i].RequiresArg {
				t.Errorf("Expected RequiresArg %v at index %d for input %q, but got %v", td.expected.tokens[i].RequiresArg, i, td.input, token.RequiresArg)
			}
			if token.Index != td.expected.tokens[i].Index {
				t.Errorf("Expected Index %d at index %d for input %q, but got %d", td.expected.tokens[i].Index, i, td.input, token.Index)
			}
			if token.IsUrl != td.expected.tokens[i].IsUrl {
				t.Errorf("Expected IsUrl %v at index %d for input %q, but got %v", td.expected.tokens[i].IsUrl, i, td.input, token.IsUrl)
			}
		}
	}
}
