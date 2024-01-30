#!/bin/bash

# Add all changes to the staging area
git add .

# Get the list of files about to be committed
files=$(git status --porcelain | awk '{print $2}')

# Commit with a multi-line message including file information
commit_message="Auto-commit: $(date +"%Y-%m-%d %H:%M:%S")

Files:"
for file in $files; do
  commit_message+="\n$file"
done

commit_message+="\n\nhttps://github.com/jacklehamster/bun-template"

git commit -m "$commit_message"

# Print a message indicating the successful commit
echo "Changes committed successfully."
