thumbnails:
  #!/usr/bin/bash
  for FILE in $( ls -1 static/gallery/*.jpeg )
  do
    if [[ ! $FILE =~ "thumb.jpg" ]]
    then
      OUT=$FILE.thumb.jpg
      if [[ ! -f $OUT ]]
      then
        echo "Converting $FILE"
        convert $FILE -resize 500x500 $OUT
      fi
      OUT=$FILE.medium.jpg
      if [[ ! -f $OUT ]]
      then
        echo "Converting $FILE to medium format"
        convert $FILE -resize 1024x1024 $OUT
      fi
    fi
  done
  for FILE in $( ls -1 static/gallery/**/*.jpg )
  do
    if [[ ! $FILE =~ "thumb.jpg" ]]
    then
      OUT=$FILE.thumb.jpg
      if [[ ! -f $OUT ]]
      then
        echo "Converting $FILE"
        convert $FILE -resize 500x500 $OUT
      fi
      OUT=$FILE.medium.jpg
      if [[ ! -f $OUT ]]
      then
        echo "Converting $FILE to medium format"
        convert $FILE -resize 1024x1024 $OUT
      fi
    fi
  done

preview:
    npx eleventy --serve

css: 
    npx tailwindcss -i _includes/styles.in.css -o _site/styles.css --minify

