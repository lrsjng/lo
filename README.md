# lo

[![license][license-img]][github] [![github][github-img]][github] [![npm][npm-img]][npm]  


Lightweight utility library for the browser.


## lo.dom()

Creates a new dom instance, this is an array-like collection of HTML elements.
```js
// create elements
lo.dom('<div><span>hi</span></div>')

// select via document.querySelectorAll
lo.dom('div')

// select HTML elements directly
lo.dom(el)
lo.dom([el1, el2])

// run on doc ready
lo.dom(fn)
```

dom methods are:
```js
.each(fn)
.map(fn)
.find(selector)
.on(type, fn)
.off(type, fn)
.attr(key, value)
.rm_attr(key)
.val(value)
.html(str)
.text(str)
.rm()
.rpl(arg)
.app(arg)
.app_to(arg)
.pre(arg)
.pre_to(arg)
.cls(...names)
.has_cls(name)
.add_cls(...names)
.rm_cls(...names)
```

## lo.binder()

Creates a new binder instance.
```js
// no options here
lo.binder()
```

binder methods are:
```js
.log()
.add(name, ...els)
.set(name, val)
.on(name, fn)
.collect(root_el, split)
```


## License
The MIT License (MIT)

Copyright (c) 2024 Lars Jung (https://larsjung.de)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


[github]: https://github.com/lrsjng/lo
[npm]: https://www.npmjs.org/package/lo

[license-img]: https://img.shields.io/badge/license-MIT-a0a060.svg?style=flat-square
[github-img]: https://img.shields.io/badge/github-lrsjng/lo-a0a060.svg?style=flat-square
[npm-img]: https://img.shields.io/badge/npm-lo-a0a060.svg?style=flat-square
