import { curry2, curry3 } from 'fj-curry'


let _modifyClassList = (modify, getClass, elements) => {
  return elements.map((element, idx) => modify.call(element.classList, getClass(idx)));
};

let _hasClass = (getClass, elements) => {
  return elements.every((element, idx) => element.classList.contains(getClass(idx)));
};

let ClassList = DOMTokenList.prototype;
let modifyClassList = curry3(_modifyClassList);

export let addClass = modifyClassList(ClassList.add);
export let removeClass = modifyClassList(ClassList.remove);
export let toggleClass = modifyClassList(ClassList.toggle);
export let hasClass = curry2(_hasClass);
