"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var assert = _interopRequire(require("assert"));

var always = _interopRequire(require("fj-always"));

var _fdSelect = require("fd-select");

var select = _fdSelect.select;
var selectOne = _fdSelect.selectOne;
var _ = require("./");

var addClass = _.addClass;
var removeClass = _.removeClass;
var toggleClass = _.toggleClass;
var hasClass = _.hasClass;



describe("fd-class", function () {
  var HTML = "\n    <ul data-foo=\"bar\" class=\"fruits\">\n    <li class=\"fruit yummie tastie red\">apple</li>\n    <li class=\"fruit yummie tastie red\">orange</li>\n    <li class=\"fruit yummie tastie\">plum</li>\n    </ul>\n  ";
  var fixture = undefined,
      lis = undefined,
      li = undefined;

  beforeEach(function () {
    while (document.body.hasChildNodes()) {
      document.body.removeChild(document.body.lastChild);
    }
    fixture = document.createElement("div");
    fixture.innerHTML = HTML;
    document.body.appendChild(fixture);

    lis = select(".fruit");
    li = selectOne(".fruit");
  });

  it("#addClass", function () {
    addClass(always("hide"), [li]);
    assert(li.classList.contains("hide"));
    assert(!lis[1].classList.contains("hide"));
    assert(!lis[2].classList.contains("hide"));

    addClass(always("blue"), lis);
    assert(lis[0].classList.contains("blue"));
    assert(lis[1].classList.contains("blue"));
    assert(lis[2].classList.contains("blue"));
  });

  it("#removeClass", function () {
    removeClass(always("yummie"), [li]);
    assert(!li.classList.contains("yummie"));
    assert(lis[1].classList.contains("yummie"));
    assert(lis[2].classList.contains("yummie"));

    removeClass(always("tastie"), lis);
    assert(!lis[0].classList.contains("tastie"));
    assert(!lis[1].classList.contains("tastie"));
    assert(!lis[2].classList.contains("tastie"));
  });

  it("#toggleClass", function () {
    toggleClass(always("hide"), [li]);
    assert(li.classList.contains("hide"));
    assert(!lis[1].classList.contains("hide"));
    assert(!lis[2].classList.contains("hide"));

    toggleClass(always("blue"), lis);
    assert(lis[0].classList.contains("blue"));
    assert(lis[1].classList.contains("blue"));
    assert(lis[2].classList.contains("blue"));

    toggleClass(always("hide"), [li]);
    assert(!li.classList.contains("hide"));
    assert(!lis[1].classList.contains("hide"));
    assert(!lis[2].classList.contains("hide"));

    toggleClass(always("blue"), lis);
    assert(!lis[0].classList.contains("blue"));
    assert(!lis[1].classList.contains("blue"));
    assert(!lis[2].classList.contains("blue"));
  });

  it("#hasClass", function () {
    assert(hasClass(always("fruit"))(lis));
    assert(!hasClass(always("red"))(lis));
  });

  it("#getClass should get the index of the element", function () {
    function rowClass(idx) {
      return "row-" + idx;
    }

    addClass(rowClass, lis);
    assert(lis[0].classList.contains("row-0"));
    assert(lis[1].classList.contains("row-1"));
    assert(lis[2].classList.contains("row-2"));

    removeClass(rowClass, lis);
    assert(!lis[0].classList.contains("row-0"));
    assert(!lis[1].classList.contains("row-1"));
    assert(!lis[2].classList.contains("row-2"));

    toggleClass(rowClass, lis);
    assert(lis[0].classList.contains("row-0"));
    assert(lis[1].classList.contains("row-1"));
    assert(lis[2].classList.contains("row-2"));
  });
});