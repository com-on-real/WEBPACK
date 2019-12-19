# WEBPACK CONFIG :

## 1 MODE
### PRODUCTION
	```
	npm run prod
	```
	rajoute un hash à tous les fichiers pour éviter les problèmes de cash avec les mises à jours
	créer un seul fichier css et js minifier dans /public
	creer un fichier manifest.json avec le nom des fichiers

### DEVELOPEMENT
	```
	npm run dev
	```
	creer un seul fichier css et js lisible dans /public
	creer un fichier manifest.json avec le nom des fichiers

## 2. LOADER
### JS
	babel-loader: rend compatible le js avec d'ancien navigateur

### CSS
	sass-loader: compile sass en css
	autoprefixer: rajoute les prefixes css pour compatibilité navigateur

### IMG
	url-loader: les images légeres sont transformer en base64
	file-loader: les images lourdes sont optimizé et réduite en poids