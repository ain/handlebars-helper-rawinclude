/**
 * Handlebars Helper: {{rawinclude}}
 * Copyright (c) 2014 Ain Tohvri
 * Licensed under the GPL license.
 */

'use strict';

// node_modules
var minimatch = require('minimatch');
var matter = require('gray-matter');
var file = require('fs-utils');
var _ = require('lodash');

module.exports.register = function (Handlebars, options, params) {

  var assemble = params.assemble;
  var grunt = params.grunt;
  var opts = options || {};

  /**
   * {{rawinclude}}
   * Like {{ include }} but without context.
   *
   * @param  {String} path    Path of the file to include.
   * @return {String}         Returns raw content of the file at path.
   * @example: {{rawinclude '/path/to/compund.svg'}}
   * @todo support for Array input, minimatch.
   */
  Handlebars.registerHelper('rawinclude', function(name) {
    var result = matter.read(name);
    return new Handlebars.SafeString(result.content);
  });
};