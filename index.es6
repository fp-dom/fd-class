import { curry2 } from 'fj-curry'

function _addClass(getClass, elements) {
  return elements.map((element, idx) => element.classList.add(getClass(idx)));
}

function _removeClass(getClass, elements) {
  return elements.map((element, idx) => element.classList.remove(getClass(idx)));
}

function _toggleClass(getClass, elements) {
  return elements.map((element, idx) => element.classList.toggle(getClass(idx)));
}

function _hasClass(getClass, elements) {
  return elements.every((element, idx) => element.classList.contains(getClass(idx)));
}

export let addClass = curry2(_addClass);
export let removeClass = curry2(_removeClass);
export let toggleClass = curry2(_toggleClass);
export let hasClass = curry2(_hasClass);
