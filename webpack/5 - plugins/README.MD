# [Plugins](https://webpack.js.org/plugins/)
The `plugins` option is used to customize the webpack build process in a variety of ways.

To add a plugin:
- install via `npm` and then `require`
- there are built-in plugins under `webpack.[plugin-name]`.

In this example [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) is used to
- copy `index.html` to the `dist` folder
- inject the bundles into it

## To run:
- install packages
```
npm i
```
- run
```
npm run build
```
- then
```
npm run open
```

