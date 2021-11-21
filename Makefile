.PHONY: updatecss
updatecss:
	npx tailwindcss -i _includes/styles.in.css -o _site/styles.css

.PHONY: prodcss
prodcss:
	NODE_ENV=production npx tailwindcss -i _includes/styles.in.css -o _site/styles.css --minify