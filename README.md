# Curler

Curler is an extention that allows you to run curl commands, and view results within Visual Studio Code.

## Features

- Execute curl commands written in file.
- Curler file is just a bash file, with `curler.sh` extension. Hence, you we can share the file with others, and they can execute the request without any dependencies (except curl) needed.
- Write success result and error to file.
- View results in a file.

## Requirements

[curl](https://curl.se/download.html) must be installed on your system. Many systems come with curl pre-installed.

## ToDos

- Add support for code-lens buttons to add `curl` command headers, query params.
- Add support for curl command validation and suggestions.
- Add support for curl command snippets.
