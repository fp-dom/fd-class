import assert from 'assert';
import always from 'fj-always';
import { select, selectOne } from 'fd-select';

import { addClass, removeClass, toggleClass } from './';


describe('fd-class', () => {
  const HTML =  `
    <ul data-foo="bar" class="fruits">
    <li class="fruit yummie tastie">apple</li>
    <li class="fruit yummie tastie">orange</li>
    <li class="fruit yummie tastie">plum</li>
    </ul>
  `;
  let fixture, lis, li;

  beforeEach(() => {
    while (document.body.hasChildNodes()) {
        document.body.removeChild(document.body.lastChild);
    }
    fixture = document.createElement('div');
    fixture.innerHTML=HTML;
    document.body.appendChild(fixture);

    lis = select('.fruit');
    li = selectOne('.fruit');
  });

  it('#addClass', () => {
    addClass(always('hide'), [li])
    assert(li.classList.contains('hide'));
    assert(!lis[1].classList.contains('hide'));
    assert(!lis[2].classList.contains('hide'));

    addClass(always('blue'), lis)
    assert(lis[0].classList.contains('blue'));
    assert(lis[1].classList.contains('blue'));
    assert(lis[2].classList.contains('blue'));
  });

  it('#removeClass', () => {
    removeClass(always('yummie'), [li])
    assert(!li.classList.contains('yummie'));
    assert(lis[1].classList.contains('yummie'));
    assert(lis[2].classList.contains('yummie'));

    removeClass(always('tastie'), lis)
    assert(!lis[0].classList.contains('tastie'));
    assert(!lis[1].classList.contains('tastie'));
    assert(!lis[2].classList.contains('tastie'));
  });

  it('#toggleClass', () => {
    toggleClass(always('hide'), [li])
    assert(li.classList.contains('hide'));
    assert(!lis[1].classList.contains('hide'));
    assert(!lis[2].classList.contains('hide'));

    toggleClass(always('blue'), lis)
    assert(lis[0].classList.contains('blue'));
    assert(lis[1].classList.contains('blue'));
    assert(lis[2].classList.contains('blue'));

    toggleClass(always('hide'), [li])
    assert(!li.classList.contains('hide'));
    assert(!lis[1].classList.contains('hide'));
    assert(!lis[2].classList.contains('hide'));

    toggleClass(always('blue'), lis)
    assert(!lis[0].classList.contains('blue'));
    assert(!lis[1].classList.contains('blue'));
    assert(!lis[2].classList.contains('blue'));
  });

  it('#getClass should get the index of the element', () => {
    function rowClass(idx) {
      return 'row-' + idx;
    }

    addClass(rowClass, lis)
    assert(lis[0].classList.contains('row-0'));
    assert(lis[1].classList.contains('row-1'));
    assert(lis[2].classList.contains('row-2'));

    removeClass(rowClass, lis)
    assert(!lis[0].classList.contains('row-0'));
    assert(!lis[1].classList.contains('row-1'));
    assert(!lis[2].classList.contains('row-2'));

    toggleClass(rowClass, lis)
    assert(lis[0].classList.contains('row-0'));
    assert(lis[1].classList.contains('row-1'));
    assert(lis[2].classList.contains('row-2'));
  });
});
