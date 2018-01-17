---
id: scripts-meteor-pkg
title: Publish Meteor Package
---

## Goal

This script publishes a meteor package and tags it (must be in the root of the repo). This ensures that all published packages are committed, pushed, and tagged.

Tagging releases is important in order to be able to debug previous versions
and produce bug fixes releases.

## Usage

```sh
publish-meteor-package
```

## Code

```sh
#!/bin/bash

if [ ! -z "$(git status --porcelain)" ]; then
  echo "Git working directory is not clean"
  exit 1
fi

VERSION=`cat package.js | sed -n 's/.*version:[^0-9]*\([0-9]*\.[0-9]*\.[0-9]*\).*/\1/p'`

echo "Publish version $VERSION? (Enter 'y' to continue...)"
read CONTINUE
if [ "$CONTINUE" != "y" ] ; then
  exit 1
fi

# Ensure we do not publish the package with any local node_modules as it can lead
# to some nasty bugs with meteor's build process.
rm -rf ./node_modules

git tag -a "v$VERSION" -m "Version $VERSION"
meteor publish || exit 1
git push --tags
git add .versions
git commit -m "Meteor publish updated .versions"
git push
```