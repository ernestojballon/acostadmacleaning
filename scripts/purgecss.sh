#!/bin/bash

# Directory where your CSS files are located
CSS_DIR="./dist/css"

# Patterns for your content files (HTML and JS) - No single quotes here
CONTENT_PATTERNS="./dist/*.html ./dist/**/*.js"

# Loop through each CSS file in the directory and run PurgeCSS
for cssfile in $CSS_DIR/*.css; do
  echo "Purging $cssfile..."
  # Use array expansion for content patterns
  npx purgecss --css "$cssfile" --content ${CONTENT_PATTERNS} --output "$cssfile" 
done

echo "PurgeCSS process completed."