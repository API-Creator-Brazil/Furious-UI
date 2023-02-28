#!/bin/bash

CURRENT_VERSION=$(jq -r '.version' package.json)

IFS=. read i1 i2 i3 <<<"$CURRENT_VERSION"
i3_updated=$((i3 + 1))
new_version=$i1.$i2.$i3_updated

sed -i "s/\"version\": \"${CURRENT_VERSION}\"/\"version\": \"${new_version}\"/" package.json
