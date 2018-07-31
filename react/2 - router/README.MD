# Basic Router
An example with a vary basic routing in a react app.

new packages in `package.json`:
- `react-router` and  `react-router-dom` enable routing in a react app

`webpack.config.js` was updated to serve port 3002 and to fix a routing issue:
``` js
  devServer: {
    port: 3002,
    historyApiFallback: {
      disableDotRule: true,
    },
  }
```

