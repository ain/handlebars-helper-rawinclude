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

  it('should parse fixtures/circle.svg with correctly using gray-matter', function () {
    var template = Handlebars.compile('{{rawinclude "fixtures/circle.svg"}}');
    template({}).should.eql('<?xml version="1.0" standalone="no"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg width="4960px" height="7015px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">\n    <g>\n        <g id="Layer1">\n            <g>\n                <path d="M2410.17,2875.22C2858,2875.22 3221.03,3242.25 3221.03,3695C3221.03,4147.75 2858,4514.77 2410.17,4514.77C1962.34,4514.77 1599.31,4147.75 1599.31,3695C1599.31,3242.25 1962.34,2875.22 2410.17,2875.22Z" style="fill:rgb(227,229,228);"/>\n            </g>\n        </g>\n    </g>\n</svg>\n');
  });
});

describe('errorhandling', function () {
  it('should throw TypeError on non-string key', function () {
    Handlebars.compile('{{rawinclude foo}}').should.throw(TypeError);
  });
});
