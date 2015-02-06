"use strict";

var curry2 = require("fj-curry").curry2;


function _addClass(getClass, elements) {
  return elements.map(function (element, idx) {
    return element.classList.add(getClass(idx));
  });
}

function _removeClass(getClass, elements) {
  return elements.map(function (element, idx) {
    return element.classList.remove(getClass(idx));
  });
}

function _toggleClass(getClass, elements) {
  return elements.map(function (element, idx) {
    return element.classList.toggle(getClass(idx));
  });
}

function _hasClass(getClass, elements) {
  return elements.every(function (element, idx) {
    return element.classList.contains(getClass(idx));
  });
}

var addClass = exports.addClass = curry2(_addClass);
var removeClass = exports.removeClass = curry2(_removeClass);
var toggleClass = exports.toggleClass = curry2(_toggleClass);
var hasClass = exports.hasClass = curry2(_hasClass);
exports.__esModule = true;