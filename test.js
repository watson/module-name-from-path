'use strict'

var assert = require('assert')
var parse = require('./')

var paths = [
  '/path/to/node_modules/name/index.js',
  '/path/to/node_modules/name/sub/index.js',
  '/path/to/node_modules/invalid/node_modules/name/index.js'
]

paths.forEach(function (path) {
  assert.strictEqual(parse(path), 'name')
})

assert.strictEqual(parse(''), undefined)
