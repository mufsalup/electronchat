# EletronChat Tutorial

In order to be able to run React with Electorn we need to use
webpack to build our application before using it. Otherwise the
chromium would not understand our code. That is also the reason
why the page is not updated as soon as it is saved. At least we
can have a script that is watching for changes and building them
as soon as we hit save. 

```shell
npm run watch
```
> This will execute the "watch" command which was created by us
> in the package.json file.

With that you can start the application as you are used to:

```shell
npm start
```

To see the changes done and build, you just need to press: 
`CTRL + R`

When using the devDependency `electron-reload` you can also
reload automatically, when you save your file. Therefore you
have to add something to your main.js file (Main process of 
electron).

```javascript
const path = require('path');
const appInDevelopmentMode = app.isPackaged;

if (appInDevelopmentMode) {
    // Use electorn-reload when in develop mode. Electorn-reload requires the path and electron.
    require('electron-reload')(__dirname, {
        electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
    })
}
```

Certain words, phrases and concepts are explained in the following
section.

### Babel
Babel is a javaScript compiler for compiling javaScript code in
an older version of javaScript. You may try it out in the official
babel website.

### Chromium
Chromium is a web engine for rendering the UI (basically a full
"Chrome-like" browser).

### Sourcemap
A sourcemap is a mapping between the builded/bundeled files and our
code. It is helping the developer to debug. 

### Webpack
Webpack is a module builder with the main purpose is to bundle 
javaScript files for the use in the browser. Webpack takes
instructions how to bundle files to do so.