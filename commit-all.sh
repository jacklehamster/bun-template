#!/bin/bash

# Add all changes to the staging area
git add .

# Commit with a default message
git commit -m "Auto-commit: $(date +"%Y-%m-%d %H:%M:%S")"

# Print a message indicating the successful commit
echo "Changes committed successfully."
