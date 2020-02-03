It contains the following features:

Webpack 4 bundling
Babel ES6 Compiler
Sass Compiler
jQuery 3.3.1
Popper.js
Webpack Dev Server
Generates gzip of both css and js files

Features
Webpack Loaders
This starter contains the following webpack loaders:

Sass Loader for compiling sass (SCSS)
File Loader for loading asset files
HTML Loader for loading HTML files
Babel Loader for compiling ES6 code

Webpack Plugins
The following webpack plugins are also included:

Extract Text Plugin for extracting CSS files
Clean Webpack Plugin for cleaning unwanted files in dist directory
HTML Webpack Plugin for generating HTML files
Webpack Provider Plugin for providing jQuery & popper js to Bootstrap
Glob for matching HTML file

Navigate to the project folder:

cd webpack-sass-bootstrap-boilerplate
Install all packages and dependencies required for this project:

npm install
Start the development environment (then, navigate to http://localhost:8080):

npm start
Then, open a browser and navigate to: http://localhost:8080/

Building files can be done as follows:

npm run build