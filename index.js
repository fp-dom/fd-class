"use strict";

var curry2 = require("fj-curry").curry2;


function _addClass(getClass, elements) {
  return (function () {
    var _ref = [];

    for (var _iterator = elements, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref2;
      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref2 = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref2 = _i.value;
      }
      var element = _ref2;
      _ref.push(element.classList.add(getClass(0)));
    }

    return _ref;
  })();
}

function _removeClass(getClass, elements) {
  return (function () {
    var _ref = [];

    for (var _iterator = elements, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref2;
      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref2 = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref2 = _i.value;
      }
      var element = _ref2;
      _ref.push(element.classList.remove(getClass(0)));
    }

    return _ref;
  })();
}

function _toggleClass(getClass, elements) {
  return (function () {
    var _ref = [];

    for (var _iterator = elements, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref2;
      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref2 = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref2 = _i.value;
      }
      var element = _ref2;
      _ref.push(element.classList.toggle(getClass(0)));
    }

    return _ref;
  })();
}

var addClass = exports.addClass = curry2(_addClass);
var removeClass = exports.removeClass = curry2(_removeClass);
var toggleClass = exports.toggleClass = curry2(_toggleClass);
exports.__esModule = true;