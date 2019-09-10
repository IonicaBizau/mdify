













![mdify](http://i.imgur.com/koH6iq4.png)




# mdify

Markdown helpers with metadata support.




## Installation

```sh
$ npm i mdify
```









## Example






```js
"use strict";

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






## Documentation





### `stringify(metadata, content, [options])`
Stringify metadata and content.

#### Params
- **Object** `metadata`: The metadata object.
- **String** `content`: The markdown content.
- **Object** `[options]`: An object containing the following fields:
 - `start` (String): The start delimiter of the metadata (default: `---`).
 - `end` (String): The end delimiter of the metadata (default: `---`).
 - `yamlOptions` (Object): Custom js-yaml options.

#### Return
- **String** The markdown content prefixed by the stringified metadata.

### `parse(input, [options])`
Parses the markdown input and the metadata.

#### Params
- **String** `input`: The markdown code. If it contains metadata, it will be parsed.
- **Object** `[options]`: An object containing the following fields:
 - `start` (String): The metadata prefix (default: `---`).
 - `end` (RegExp): The metadata end.
 - `html` (Boolean): If `true`, the markdown code will be parsed into HTML (default: `true`).
 - `converterOptions` (Object): The converter options passed to [`showdown`](https://github.com/showdownjs/showdown).

#### Return
- **ParseResult**

### `writeFile(path, metadata, content, [options], [cb])`
Writes the generated content into a file.

#### Params
- **String** `path`: The file path.
- **Object** `metadata`: The metadata object.
- **String** `content`: The markdown content.
- **Object** `[options]`: The stringify options.
- **Function** `[cb]`: The callback function.

### `parseFile(path, [options], [cb])`
Parses a markdown file.

#### Params
- **String** `path`: The file path.
- **Object** `[options]`: The parser options.
- **Function** `[cb]`: The callback function.

#### Return
- **ParseResult** Only **if `cb` was omitted**.

An object containing the following fields:






## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].



## License
See the [LICENSE][license] file.


[license]: /LICENSE
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
