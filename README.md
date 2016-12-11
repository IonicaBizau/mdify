
[![mdify](http://i.imgur.com/koH6iq4.png)](#)

# mdify

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][patreon] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/mdify.svg)](https://www.npmjs.com/package/mdify) [![Downloads](https://img.shields.io/npm/dt/mdify.svg)](https://www.npmjs.com/package/mdify) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Markdown helpers with metadata support.

## :cloud: Installation

```sh
$ npm i --save mdify
```


## :clipboard: Example



```js
const mdify = require("mdify");

let md = mdify.stringify({
    author: "Johnny B."
  , date: new Date()
  , tags: ["hello", "world"]
}, `## Hello World!
Hey **there**!`);

console.log(md);
// ---
// author: Johnny B.
// date: 2016-06-06T07:12:17.533Z
// tags:
//   - hello
//   - world
// ---
// ## Hello World!
// Hey **there**!


console.log(mdify.parse(md));
// { markdown: '\n## Hello World!\nHey **there**!',
//   metadata:
//    { author: 'Johnny B.',
//      date: Mon Jun 06 2016 10:12:17 GMT+0300 (EEST),
//      tags: [ 'hello', 'world' ] },
//   rawMeta: '---\nauthor: Johnny B.\ndate: 2016-06-06T07:12:17.533Z\ntags:\n  - hello\n  - world',
//   html: '<h2 id="helloworld">Hello World!</h2>\n\n<p>Hey <strong>there</strong>!</p>' }
```

## :memo: Documentation


### `stringify(metadata, content, opts)`
Stringify metadata and content.

#### Params
- **Object** `metadata`: The metadata object.
- **String** `content`: The markdown content.
- **Object** `opts`: An object containing the following fields:
 - `start` (String): The start delimiter of the metadata (default: `---`).
 - `end` (String): The end delimiter of the metadata (default: `---`).

#### Return
- **String** The markdown content prefixed by the stringified metadata.

### `parse(input, opts)`
Parses the markdown input and the metadata.

#### Params
- **String** `input`: The markdown code. If it contains metadata, it will be parsed.
- **Object** `opts`: An object containing the following fields:
 - `start` (String): The metadata prefix (default: `---`).
 - `end` (RegExp): The metadata end.
 - `html` (Boolean): If `true`, the markdown code will be parsed into HTML (default: `true`).
 - `converterOptions` (Object): The converter options passed to [`showdown`](https://github.com/showdownjs/showdown).

#### Return
- **Object** An object containing the following fields:
 - `markdown` (String): The markdown content.
 - `metadata` (Object): The parsed metadata.
 - `rawMeta` (String): The raw metadata content.
 - `html` (String): The generated HTML from markdown.

### `writeFile(path, metadata, content, options, cb)`
Writes the generated content into a file.

#### Params
- **String** `path`: The file path.
- **Object** `metadata`: The metadata object.
- **String** `content`: The markdown content.
- **Object** `options`: The stringify options.
- **Function** `cb`: The callback function.

### `parseFile(path, opts, cb)`
Parses a markdown file.

#### Params
- **String** `path`: The file path.
- **Object** `opts`: The parser options.
- **Function** `cb`: The callback function.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`bloggify-markdown-adapter`](https://github.com/IonicaBizau/bloggify-markdown-adapter#readme)—Markdown adapter for Bloggify.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png


[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit

[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
