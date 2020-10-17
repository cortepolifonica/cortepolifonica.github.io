#!/bin/bash
INPUT=$1
OUTPUT=$(basename $INPUT .jpg)_trans.png

convert $INPUT -fill none -fuzz 10% \
  -flip \
  -flip \
  -draw "alpha 0,0 floodfill" \
  -flip \
  $OUTPUT

