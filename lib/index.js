"use strict";

const yaml = require("js-yaml")
    , showdown = require("showdown")
    , ul = require("ul")
    , readFile = require("read-utf8")
    ;

module.exports = class Mdify {

    /**
     * stringify
     * Stringify metadata and content.
     *
     * @name stringify
     * @function
     * @param {Object} metadata The metadata object.
     * @param {String} content The markdown content.
     * @returns {String} The markdown content prefixed by the stringified metadata.
     */
    static stringify (metadata, content) {
        if (typeof metadata === "string") {
            content = metadata;
            metadata = null;
        }
        if (metadata) {
            metadata = yaml.safeDump(metadata);
        }
        return "---\n"
             + metadata
             + "---\n"
             + content
             ;
    }

    /**
     * parse
     * Parses the markdown input and the metadata.
     *
     * @name parse
     * @function
     * @param {String} input The markdown code. If it contains metadata, it will be parsed.
     * @param {Object} opts An object containing the following fields:
     *
     *  - `start` (String): The metadata prefix (default: `---`).
     *  - `end` (RegExp): The metadata end.
     *  - `html` (Boolean): If `true`, the markdown code will be parsed into HTML (default: `true`).
     *  - `converterOptions` (Object): The converter options passed to [`showdown`](https://github.com/showdownjs/showdown).
     *
     * @returns {Object} An object containing the following fields:
     *
     *  - `markdown` (String): The markdown content.
     *  - `metadata` (Object): The parsed metadata.
     *  - `rawMeta` (String): The raw metadata content.
     *  - `html` (String): The generated HTML from markdown.
     */
    static parse (input, opts) {

        opts = ul.merge(opts, {
            start: "---"
          , end: /\n(\-{3})/g
          , html: true
          , converterOptions: {}
        });


        let result = {
            markdown: input
          , metadata: null
          , rawMeta: null
        };

        if (input.startsWith(opts.start)) {
            let res = opts.end.exec(input);
            if (res) {
                result.rawMeta = input.slice(0, res.index) || "";
                result.markdown = input.slice(opts.end.lastIndex);
                result.metadata = yaml.safeLoad(result.rawMeta);
            }
        }

        if (opts.html) {
            opts.converter = new showdown.Converter(opts.converterOptions);
            result.html = opts.converter.makeHtml(result.markdown);
        }

        return result;
    }

    /**
     * writeFile
     * Writes the generated content into a file.
     *
     * @name writeFile
     * @function
     * @param {String} path The file path.
     * @param {Object} metadata The metadata object.
     * @param {String} content The markdown content.
     * @param {Function} cb The callback function.
     */
    static writeFile (path, metadata, content, cb) {
        content = Mdify.stringify(metadata, content);
        if (cb) {
            fs.writeFile(path, content, cb);
        } else {
            fs.writeFileSync(path, content);
        }
    }

    /**
     * parseFile
     * Parses a markdown file.
     *
     * @name parseFile
     * @function
     * @param {String} path The file path.
     * @param {Object} opts The parser options.
     * @param {Function} cb The callback function.
     */
    static parseFile (path, opts, cb) {
        if (typeof opts === "function") {
            cb = opts;
            opts = {};
        }
        if (cb) {
            readFile(path, (err, data) => {
                if (err) { return cb(err); }
                cb(null, Mdify.parse(data, opts));
            });
        } else {
            return Mdify.parse(readFile(data), opts);
        }
    }
};
