# layouts [![NPM version](https://badge.fury.io/js/layouts.png)](http://badge.fury.io/js/layouts)

> Wrap templates with layouts. Layouts can be nested and optionally use other layouts.

## Install
#### [npm](npmjs.org)

```bash
npm i layouts --save
```

## Usage

```js
var layouts = require('layouts');
```

## API
### Layouts

Create a new instance of `Layouts`, optionally passing the default
`cache` and `options` to use.

**Example:**

```js
var Layouts = require('layouts');
var layouts = new Layouts();
```

* `cache` {Object}: A template cache. See [Layouts#set](#set) for object details. 
* `options` {Object}: Options to use. 
* `options.delims` {Array}: Template delimiters to use formatted as an array (`['{{', '}}']`) 
* `options.tag` {String}: The tag name to use. Default is `body` (e.g. `{{ body }}`)   


### .set

Store a template on the cache by its `name`, the `layout` to use,
and the template's `content.

**Example:**

```js
layouts.set('a', 'b', '<h1>Foo</h1>\n{{body}}\n');
```

* `name` {String|Object}: If `name` is a string, `layout` and `content` are required. 
* `data` {String|Object}: Pass a string defining the name of layout to use for the given template, or pass an object with a `layout` property. 
* `content` {String}: The template "content", this will not be compiled or rendered.   


### .get

Get a cached template by `name`.

**Example:**

```js
layouts.get('a');
//=> { layout: 'b', content: '<h1>Foo</h1>\n{{body}}\n' }
```

* `name` {String}  
* `return` {Object} The template object to return. 


### .replaceTag

Replace a `{{body}}` tag (or equivalent if custom delims are used) in `content`
with the given `str`.

**Example:**

```js
console.log(layouts.replaceTag('ABC', 'Before {{body}} After'));
//=> 'Before ABC After'
```

* `str` {String}: The string to use as a replacement value. 
* `content` {String}: A string with a `{{body}}` tag where the `str` should be injected.  
* `return` {String} Resulting flattened content. 


### .inject

Inject content into a layout stack.

**Example:**

```js
var page = layouts.inject(str, 'base');
var tmpl = _.template(page, context);
```

* `str` {String}: The content to inject into the layout. 
* `name` {String}: The layout to start with.  
* `return` {String} Resulting flattened layout.

## Author

**Jon Schlinkert**
 
+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert) 

## License
Copyright (c) 2014 Jon Schlinkert, contributors.  
Released under the MIT license

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on August 01, 2014._