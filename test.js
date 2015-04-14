/**
 * {{rawínclude}} <http://github.com/ain/handlebars-helper-rawinclude>
 *
 * Copyright (c) 2014-2015 Ain Tohvri <https://github.com/ain>
 * Licensed under the GPL License (GPL)
 */

var should = require('should');
var Handlebars = require('handlebars');
var helpers = require('./index');
var matter = require('gray-matter');

Handlebars.registerHelper("rawinclude", helpers.rawinclude);

describe('parsing', function () {
  it('should parse fixtures/GPLv3_Logo.svg into template', function () {
    var template = Handlebars.compile('{{rawinclude "fixtures/GPLv3_Logo.svg"}}');
    var context = matter.read('fixtures/GPLv3_Logo.svg');
    template({}).should.eql(context.content);
  });

  it('should parse fixtures/circle.svg into template', function () {
    var template = Handlebars.compile('{{rawinclude "fixtures/circle.svg"}}');
    var context = matter.read('fixtures/circle.svg');
    template({}).should.eql(context.content);
  });

  it('should parse fixtures/simple.json into template', function () {
    var template = Handlebars.compile('{{rawinclude "fixtures/simple.json"}}');
    var context = matter.read('fixtures/simple.json');
    template({}).should.eql(context.content);
  });
});

describe('errorhandling', function () {
  it('should throw TypeError on non-string key', function () {
    Handlebars.compile('{{rawinclude foo}}').should.throw(TypeError);
  });
});