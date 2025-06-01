package main

type Token struct {
	Value       string
	IsOption    bool
	RequiresArg bool
	Index       int
	IsUrl       bool
}
