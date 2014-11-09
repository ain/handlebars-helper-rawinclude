/**
 * Handlebars Helper: {{rawinclude}}
 * Copyright (c) 2014 Ain Tohvri
 * Licensed under the GPL license.
 */

'use strict';

/**
 * {{rawinclude}}
 * Like {{ include }} but without context.
 *
 * @param  {String} path    Path of the file to include.
 * @return {String}         Returns raw content of the file at path.
 * @example: {{rawinclude '/path/to/compund.svg'}}
 * @todo support for Array input, minimatch.
 */
exports.rawinclude = function (path, options) {

  if (typeof path !== 'string') {
    throw new TypeError('Invalid key. String expected.');
  }

  options = options || {};
  options.hash = options.hash || {};

  var Handlebars = require('handlebars');
  var matter = require('gray-matter');

  var result = matter.read(path);
  return new Handlebars.SafeString(result.content);
};
