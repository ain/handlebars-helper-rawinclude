/**
 * Handlebars Helper: {{{rawinclude}}}
 * Copyright © 2014-2016 Ain Tohvri
 * Licensed under GPL-3.0
 */

'use strict';

/**
 * {{{rawinclude}}}
 * Like {{ include }} but without context.
 *
 * @param  {String} path    Path of the file to include.
 * @return {String}         Returns raw content of the file at path.
 * @example: {{{rawinclude '/path/to/compund.svg'}}}
 * @todo support for Array input, minimatch.
 */
exports.rawinclude = function (path, options) {

  if (typeof path !== 'string') {
    throw new TypeError('Invalid key. String expected.');
  }

  options = options || {};
  options.hash = options.hash || {};

  var fs = require('fs')

  return fs.readFileSync(path, 'utf8');
};
