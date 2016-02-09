# module-name-from-path

Extract the Node.js module name given an absolute path to a file inside
the module.

[![Build status](https://travis-ci.org/watson/module-name-from-path.svg?branch=master)](https://travis-ci.org/watson/module-name-from-path)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

## Installation

```
npm install module-name-from-path --save
```

## Usage

```js
var assert = require('assert')
var parse = require('module-name-from-path')

var path = '/Users/watson/code/node_modules/blackjack/node_modules/picture-tube/bin/tube.js'

assert.strictEqual(parse(path), 'picture-tube')
```

Returns `undefined` if module name cannot be found.

## License

MIT
