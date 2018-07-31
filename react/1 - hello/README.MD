# Hello, React
Here I tried to create the simpliest React app setup just to render `hello, world!`:

packages in `package.json`:
- `webpack`, `webpack-cli`, `webpack-dev-server` - basic packages to bundle the app using webpack
- `babel-core`, `babel-preset-env`, `babel-preset-react` - basic packages to compile `*.js` files (with `JSX`)
- `babel-loader` is used in webpack config to compile `*.js` files using Babel
- `html-webpack-plugin` - a webpack plugin to inject bundles into the html template (`index.html`)
- `react` and `react-dom` are required to render the very basic app in React
