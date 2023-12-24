#!/bin/bash

categories=("Clothing" "Office supplies" "Pet supplies" "Toys & Games")

for category in "${categories[@]}"; do
    filename=$(echo "$category" | tr -cd '[:alnum:]')  # Remove special characters from the category name for filename
    touch "$filename.js"  # Create a JavaScript file for each category name
    echo "const $filename = [];" > "$filename.js"
    echo "export default $filename;" >> "$filename.js"
done
