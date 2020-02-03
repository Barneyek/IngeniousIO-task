This Webpack Sass boilerplate starter contains the features and scripts you need
to get started quickly with Webpack bundling and building, Live Loading,gzip-compression and creating a dev server.
<br/>
<br/>
<b>It contains the following features:</b>
<ul>
<li>Webpack 4 bundling</li>
<li>Babel ES6 Compiler</li>
<li>Sass Compiler</li>
<li>jQuery 3.3.1</li>
<li>Popper.js</li>
<li>Webpack Dev Server</li>
<li>Generates gzip of both css and js files</li>
</ul>
<br/>
<b>Features</b>
<br/>
Webpack Loaders<br/>
<br/>
This starter contains the following webpack loaders:
<ul>
<li>Sass Loader for compiling sass (SCSS)</li>
<li>File Loader for loading asset files</li>
<li>HTML Loader for loading HTML files</li>
<li>Babel Loader for compiling ES6 code</li>
</ul>
<br/>
<b>Webpack Plugins</b><br/>
<br/>
The following webpack plugins are also included:
<li>Extract Text Plugin for extracting CSS files</li>
<li>Clean Webpack Plugin for cleaning unwanted files in dist directory</li>
<li>HTML Webpack Plugin for generating HTML files</li>
<li>Webpack Provider Plugin for providing jQuery & popper js to Bootstrap</li>
<li>Glob for matching HTML file</li>
<br/>
<b>Quick Start<br/></b>
<br/>
Navigate to the project folder and Install all packages and dependencies required for this project:

    npm install
    
Start the development environment (then, navigate to http://localhost:8080):

    npm start
 
Then, open a browser and navigate to: http://localhost:8080/ 
    
Building files can be done as follows:

    npm run build