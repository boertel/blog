#!/bin/bash

if [[ $# = 0 ]]; then
    echo "usage: $0 name [editor]"
    exit 1
fi

NAME="*$1*"

if [[ -z "$2" ]]; then
    OPEN_WITH=$EDITOR
else
    OPEN_WITH=$2
fi

FILEPATH=$(find _posts/ -name "$NAME")

$OPEN_WITH $FILEPATH
