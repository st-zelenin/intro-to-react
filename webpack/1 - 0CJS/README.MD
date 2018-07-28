# 0CJS - Zero-Config JS

## run `webpack` with defaults

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
## verify `tree shaking`
- comment `import` and appropriate usage
- build with `webpack -d --devtool none`
- ensure that the commented module is not included into the bundle
