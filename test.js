'use strict'

var assert = require('assert')
var parse = require('./')

var simplePaths = [
  '/path/to/node_modules/name/index.js',
  '/path/to/node_modules/name/sub/index.js',
  '/path/to/node_modules/invalid/node_modules/name/index.js'
]

simplePaths.forEach(function (path) {
  assert.strictEqual(parse(path), 'name')
})

var scopedPaths = [
  '/path/to/node_modules/@org/name/index.js',
  '/path/to/node_modules/@org/name/sub/index.js',
  '/path/to/node_modules/invalid/node_modules/@org/name/index.js'
]

scopedPaths.forEach(function (path) {
  assert.strictEqual(parse(path), '@org/name')
})

assert.strictEqual(parse(''), undefined)
