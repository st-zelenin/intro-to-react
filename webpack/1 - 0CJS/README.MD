# 0CJS - Zero-Config JS
Since version 4.0.0, `webpack` does not require a configuration file to bundle your project.

## To run:
### install `webpack`
```
npm i -g webpack webpack-cli
```
where
- `npm` - node package manager (is installed with `node.js`)
- `i` is the shortcut for `install`
- `-g` means globally (in `%APPDATA%\npm` for Windows)
- `webpack` and `webpack-cli` - the packages

### run `webpack` with defaults

```
webpack
```
development mode:
```
webpack -d
```
production mode:
```
webpack -p
```
without source-maps (`eval`s)
```
webpack -d --devtool none
```
### verify [tree shaking](https://webpack.js.org/guides/tree-shaking/)
- comment `import` and appropriate usage
- build with `webpack -d --devtool none`
- ensure that the commented module is not included into the bundle

### to remove global packages run
```
npm uninstall -g <<package-name>>
```
