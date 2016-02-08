'use strict'

var path = require('path')

module.exports = function (file) {
  var segments = file.split(path.sep)
  var index = segments.lastIndexOf('node_modules')
  if (index === -1) return
  return segments[index + 1]
}
