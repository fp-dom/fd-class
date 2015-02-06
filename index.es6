import { curry2 } from 'fj-curry'

function _addClass(getClass, elements) {
  return [for (element of elements) element.classList.add(getClass(0))];
}

function _removeClass(getClass, elements) {
  return [for (element of elements) element.classList.remove(getClass(0))];
}

function _toggleClass(getClass, elements) {
  return [for (element of elements) element.classList.toggle(getClass(0))];
}

export let addClass = curry2(_addClass);
export let removeClass = curry2(_removeClass);
export let toggleClass = curry2(_toggleClass);
