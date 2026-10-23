#!/usr/bin/env bash
# Rebuilds the finished site that Tofu serves from site/ (see TOFU.md).
#
# LiveCodes builds with its own esbuild scripts, which Tofu's hosting does not run, so the
# result is committed. This script applies the Tofu copy's changes (tofu/livecodes-tofu.patch)
# to upstream's sources only for the length of the build, then puts the sources back, so the
# upstream files on the `tofu` branch stay exactly as upstream wrote them.
#
# Needs Node.js 22 or newer, npm and git. Run from anywhere: bash tofu/build.sh
set -euo pipefail

cd "$(dirname "$0")/.."

PATCH=tofu/livecodes-tofu.patch
git apply --check "$PATCH"
git apply "$PATCH"
trap 'git apply -R "$PATCH"' EXIT

# Same install as upstream's Dockerfile: skip the docs, storybook and server installs
# that the postinstall script would add, then apply upstream's dependency patches.
npm ci --ignore-scripts --no-audit --no-fund
npx --no-install patch-package

# DOCS_BASE_URL=null points the app's help links at upstream's online docs
# (https://livecodes.io/docs/) instead of a /docs/ folder this copy does not build.
DOCS_BASE_URL=null npm run build:app

rm -rf site
cp -R build site
cp LICENSE site/LICENSE
# Only the GitHub login loads this chunk (it holds upstream's Firebase project settings);
# the patch turns the login off, so the copy does not ship it.
rm -f site/livecodes/firebase.*.js
echo "site/ rebuilt from build/ ($(find site -type f | wc -l | tr -d ' ') files)"
