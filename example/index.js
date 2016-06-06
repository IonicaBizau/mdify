"use strict";

const mdify = require("../lib");

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
