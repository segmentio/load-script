#
# Binaries
#

KARMA := node_modules/.bin/karma

#
# Tasks
#

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

test-karma: node_modules
	@$(KARMA) start
.PHONY: test-karma

# Default test target.
test: test-karma
.PHONY: test
.DEFAULT_GOAL = test
