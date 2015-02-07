"use strict";

var _fjCurry = require("fj-curry");

var curry2 = _fjCurry.curry2;
var curry3 = _fjCurry.curry3;



var _modifyClassList = function (modify, getClass, elements) {
  return elements.map(function (element, idx) {
    return modify.call(element.classList, getClass(idx));
  });
};

var _hasClass = function (getClass, elements) {
  return elements.every(function (element, idx) {
    return element.classList.contains(getClass(idx));
  });
};

var ClassList = DOMTokenList.prototype;
var modifyClassList = curry3(_modifyClassList);

var addClass = exports.addClass = modifyClassList(ClassList.add);
var removeClass = exports.removeClass = modifyClassList(ClassList.remove);
var toggleClass = exports.toggleClass = modifyClassList(ClassList.toggle);
var hasClass = exports.hasClass = curry2(_hasClass);
exports.__esModule = true;