thumbnails:
  #!/usr/bin/bash
  for FILE in $( ls -1 static/gallery/*.jpeg )
  do
    convert $FILE -resize 500x500 $FILE.thumb.jpg
  done
  for FILE in $( ls -1 static/gallery/**/*.jpg )
  do
    convert $FILE -resize 500x500 $FILE.thumb.jpg
  done

preview:
    npx eleventy --serve

css: 
    npx tailwindcss -i _includes/styles.in.css -o _site/styles.css --minify

