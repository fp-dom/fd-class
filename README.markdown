# fd-class

[![Build Status](https://travis-ci.org/fp-dom/fd-class.svg)](https://travis-ci.org/fp-dom/fd-class) [![npm version](https://badge.fury.io/js/fd-class.svg)](http://badge.fury.io/js/fd-class)
> Manipulate classes, FD style.

## Installation

`npm install fd-class --save`

## Usage

```js
var addClass = require('fd-class').addClass;
var removeClass = require('fd-class').removeClass;
var toggleClass = require('fd-class').toggleClass;
var hasClass = require('fd-class').hasClass;

var select = require('fd-select').select;
var always = require('fj-always');

addClass(always('blue'), select('li')); // adds the class "blue" to all the li
removeClass(always('blue'), select('li')); // removes the class "blue" to all the li
toggleClass(always('blue'), select('li')); // toggles the class "blue" to all the li
hasClass(always('foo'), select('.item')); // returns true if all ".item" contain the class "foo"

var hide = addClass(always('hide'));

hide(select('.item')); // adds the class hide to all ".items"

function rowClass(idx) {
  return 'row-' + idx;
}

addClass(rowClass, select('tr'));
/*
<tr class="item row-0"></tr>
<tr class="item row-1"></tr>
<tr class="item row-2"></tr>
*/
```
