package main

import (
	"errors"
	"fmt"
	"slices"
	"strings"

	"github.com/mattn/go-shellwords"
)

// Update list from https://phoenixnap.com/kb/curl-command
var (
	CURL_OPTIONS_WITH_ARGS = []string{
		"--abstract-unix-socket",
		"---alter-svc",
		"--aws-sigv4",
		"--cacert",
		"--capath",
		"--cert-type",
		"--cert",
		"--ciphers",
		"--config",
		"--connect-timeout",
		"--connect-to",
		"--continue-at",
		"--cookie-jar",
		"--cookie",
		"--create-file-mode",
		"--crlf-file",
		"--curves",
		"--data-ascii",
		"--data-binary",
		"--data-raw",
		"--data-urlencode",
		"--data",
		"--delegation",
		"--dns-interface",
		"--dns-ipv4-addr",
		"--dns-ipv6-addr",
		"--dns-servers",
		"--doh-url",
		"--dump-header",
		"--egd-file",
		"--engine",
		// Following options are not in order, but are included for completeness
		"--request",
	}

	CURL_OPTIONS_WITHOUT_ARGS = []string{
		"--anyauth",
		"--append",
		"--basic",
		"--cert-status",
		"--compressed-ssh",
		"--compressed",
		"--create-dirs",
		"--crlf",
		"--digest",
		"--disable-eprt",
		"--disable-epsv",
		"--disable",
		"--disallow-username-in-url",
		"--doh-cert-status",
		"--doh-insecure",
	}
)

func getWords(curlCommand string) ([]string, []string, error) {
	// Use shellwords to parse the curl command into words
	envs, words, err := shellwords.ParseWithEnvs(curlCommand)
	if err != nil {
		return nil, nil, err
	}
	return envs, words, nil
}

func createTokens(words []string) ([]Token, error) {
	if words[0] != "curl" {
		return nil, errors.New("Command must start with 'curl'")
	}
	tokens := make([]Token, 0, len(words))
	for i, word := range words {
		token := Token{
			Value: word,
			Index: i,
		}

		if strings.HasPrefix(word, "--") {
			// It's a curl option
			token.IsOption = true

			if slices.Contains(CURL_OPTIONS_WITH_ARGS, word) {
				token.RequiresArg = true
			} else if slices.Contains(CURL_OPTIONS_WITHOUT_ARGS, word) {
				token.RequiresArg = false
			} else {
				return nil, errors.New(
					fmt.Sprintf("Unknown curl option: %s", word),
				)
			}

		} else if strings.HasPrefix(word, "-") {
			// Short curl options are not supported.
			return nil, errors.New(fmt.Sprintf("Short curl options are not supported: %s", word))
		} else {
			// It's a regular word, not an option
			token.IsOption = false

			// Either argument for curl option or URL
			if len(tokens) > 0 {
				lastToken := tokens[len(tokens)-1]
				if lastToken.IsOption {
					if lastToken.RequiresArg {
						if lastToken.Value == "--url" {
							token.IsUrl = true
						} else {
							token.IsUrl = false
						}
					} else {
						token.IsUrl = true
					}
				} else {
					token.IsUrl = true
				}
			}
		}
		tokens = append(tokens, token)
	}

	return tokens, nil
}

func parse(curlCommand string) ([]Token, error) {

	_, words, err := getWords(curlCommand)
	if err != nil {
		panic(err)
	}

	return createTokens(words)
}
