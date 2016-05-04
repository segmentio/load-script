##
# Binaries
##

ESLINT := node_modules/.bin/eslint
KARMA := node_modules/.bin/karma

##
# Files
##

LIBS = index.js
TESTS = $(shell find test -type f -name "*.js")
ALL_FILES = $(LIBS) $(TESTS)

##
# Tasks
##

# Install node modules.
node_modules: package.json $(wildcard node_modules/*/package.json)
	@npm install
	@touch $@

# Install dependencies.
install: node_modules

# Remove temporary files and build artifacts.
clean:
	@rm -rf *.log
.PHONY: clean

# Remove temporary files, build artifacts, and vendor dependencies.
distclean: clean
	@rm -rf node_modules
.PHONY: distclean

# Lint JavaScript source files.
lint: node_modules
	@$(ESLINT) $(ALL_FILES)
.PHONY: lint

# Attempt to fix linting errors.
fmt: node_modules
	@$(ESLINT) --fix $(ALL_FILES)
.PHONY: fmt

test-karma: node_modules
	@$(KARMA) start
.PHONY: test-karma

# Default test target.
test: lint test-karma
.PHONY: test
.DEFAULT_GOAL = test
