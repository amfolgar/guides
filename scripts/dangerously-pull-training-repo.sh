#!/bin/bash

set -e # exit if any command fails


BRANCHES="react-fundamentals graphql-fundamentals advanced-graphql"

echo "⚠️ WARNING! This will do a HARD RESET and wipe out your history on:"
for BRANCH in $BRANCHES ; do
  echo "🔥 $BRANCH"
done

echo "Abort now if you haven't pushed all of those branches!"
echo "(Or get to know git reflog...)"
echo "Press enter to continue."
read || exit

if [ ! -z "$(git status --porcelain)" ]; then
  echo "Git working directory is not clean."
  exit 1
fi

echo "Fetching..."
git fetch

for BRANCH in $BRANCHES ; do
  echo "🔥 Resetting $BRANCH..."
  git checkout $BRANCH
  git reset --hard origin/$BRANCH
done
