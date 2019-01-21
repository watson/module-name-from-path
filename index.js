'use strict'

var path = require('path')

module.exports = function (file) {
  var segments = file.split(path.sep)
  var index = segments.lastIndexOf('node_modules')
  if (index === -1) return
  var moduleName = segments[index + 1]
  // check for scoped modules
  if (moduleName[0] === '@') {
    moduleName = segments[index + 1] + path.sep + segments[index + 2]
  }
  return moduleName
}
