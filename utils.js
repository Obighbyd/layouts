'use strict';

/**
 * Lazily required module dependencies
 */

var utils = module.exports = require('lazy-cache')(require);
var fn = require;

require = utils;
require('falsey', 'isFalsey');
require('delimiter-regex', 'delims');
require('get-view');
require = fn;

utils.isString = function(val) {
  return val && typeof val === 'string';
};

/**
 * Format an error message
 */

utils.error = function(re, tag, name) {
  var delims = utils.matchDelims(re, tag);
  return 'cannot find tag "' + delims + '" in "' + name + '"';
};

/**
 * Only used if an error is thrown. Attempts to recreate
 * delimiters for the error message.
 */

var types = {
  '{%=': function(str) {
    return '{%= ' + str + ' %}';
  },
  '{%-': function(str) {
    return '{%- ' + str + ' %}';
  },
  '{%': function(str) {
    return '{% ' + str + ' %}';
  },
  '{{': function(str) {
    return '{{ ' + str + ' }}';
  },
  '<%': function(str) {
    return '<% ' + str + ' %>';
  },
  '<%=': function(str) {
    return '<%= ' + str + ' %>';
  },
  '<%-': function(str) {
    return '<%- ' + str + ' %>';
  }
};

utils.matchDelims = function(regex, tagname) {
  var ch = regex.source.slice(0, 4);
  if (/[\\]/.test(ch.charAt(0))) {
    ch = ch.slice(1);
  }
  if (!/[-=]/.test(ch.charAt(2))) {
    ch = ch.slice(0, 2);
  } else {
    ch = ch.slice(0, 3);
  }
  return types[ch](tagname);
};
