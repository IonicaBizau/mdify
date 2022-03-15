"use strict";

const yaml = require("js-yaml")
    , showdown = require("showdown")
    , ul = require("ul")
    , readFile = require("read-utf8")
    , fs = require("fs")
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
     * @param {Object} [options] An object containing the following fields:
     *
     *  - `start` (String): The start delimiter of the metadata (default: `---`).
     *  - `end` (String): The end delimiter of the metadata (default: `---`).
     *  - `yamlOptions` (Object): Custom js-yaml options.
     *
     * @returns {String} The markdown content prefixed by the stringified metadata.
     */
    static stringify (metadata, content, options) {

        options = ul.merge({
            start: "---"
          , end: "---"
          , yamlOptions: {}
        }, options);

        if (typeof metadata === "string") {
            content = metadata;
            metadata = null;
        }

        if (metadata) {
            metadata = yaml.dump(metadata, options.yamlOptions);
        }

        return options.start + "\n"
             + metadata
             + options.end + "\n"
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
     * @param {Object} [options] An object containing the following fields:
     *
     *  - `start` (String): The metadata prefix (default: `---`).
     *  - `end` (RegExp): The metadata end.
     *  - `html` (Boolean): If `true`, the markdown code will be parsed into HTML (default: `true`).
     *  - `converterOptions` (Object): The converter options passed to [`showdown`](https://github.com/showdownjs/showdown).
     *
     * @returns {ParseResult}
     */
    static parse (input, options) {

        options = ul.merge(options, {
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

        if (input.startsWith(options.start)) {
            let res = options.end.exec(input);
            if (res) {
                result.rawMeta = input.slice(0, res.index) || "";
                result.markdown = input.slice(options.end.lastIndex);
                result.metadata = yaml.load(result.rawMeta);
            }
        }

        if (options.html) {
            options.converter = new showdown.Converter(options.converterOptions);
            result.html = options.converter.makeHtml(result.markdown);
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
     * @param {Object} [options] The stringify options.
     * @param {Function} [cb] The callback function.
     */
    static writeFile (path, metadata, content, options, cb) {

        if (typeof options === "function") {
            cb = options;
            options = {};
        }

        content = Mdify.stringify(metadata, content, options);
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
     * @param {Object} [options] The parser options.
     * @param {Function} [cb] The callback function.
     * @returns {ParseResult} Only **if `cb` was omitted**.
     */
    static parseFile (path, options, cb) {
        if (typeof options === "function") {
            cb = options;
            options = {};
        }
        if (cb) {
            readFile(path, (err, data) => {
                if (err) { return cb(err); }
                cb(null, Mdify.parse(data, options));
            });
        } else {
            return Mdify.parse(readFile(path), options);
        }
    }
};

/**
 * An object containing the following fields:
 * @typedef {Object} ParseResult
 * @property {String} markdown The Markdown content.
 * @property {Object} metadata The parsed metadata.
 * @property {String} rawMeta The raw metadata content.
 * @property {String} html The generated HTML from Markdown.
 */
