
[![mdify](http://i.imgur.com/koH6iq4.png)](#)

# mdify

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Version](https://img.shields.io/npm/v/mdify.svg)](https://www.npmjs.com/package/mdify) [![Downloads](https://img.shields.io/npm/dt/mdify.svg)](https://www.npmjs.com/package/mdify)

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

## :question: Get Help

There are few ways to get help:

 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:
 3. For direct and quick help from me, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:


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


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:


## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`bloggify-markdown-adapter`](https://github.com/IonicaBizau/bloggify-markdown-adapter#readme)—Markdown adapter for Bloggify.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
