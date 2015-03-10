#!/bin/bash

SLUG=$1
TITLE=$2

if [[ $# == 0 ]]; then
    echo "usage: create_post slug [title]"
    exit 64
fi

DATE=$(date "+%Y-%m-%d")

FILENAME="_posts/$DATE-$1.md"

TEMPLATE="---\nlayout: post\ntitle: $TITLE\npermalink: $SLUG\ntags:\n---\n"

echo -ne $TEMPLATE > $FILENAME
echo $FILENAME

exit 0
