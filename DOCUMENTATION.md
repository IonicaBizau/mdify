## Documentation

You can see below the API reference of this module.

### `stringify(metadata, content[, options])`
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

### `parse(input[, options])`
Parses the markdown input and the metadata.

#### Params
- **String** `input`: The markdown code. If it contains metadata, it will be parsed.
- **Object** `[options]`: An object containing the following fields:
 - `start` (String): The metadata prefix (default: `---`).
 - `end` (RegExp): The metadata end.
 - `html` (Boolean): If `true`, the markdown code will be parsed into HTML (default: `true`).
 - `converterOptions` (Object): The converter options passed to [`showdown`](https://github.com/showdownjs/showdown).

#### Return
- [**ParseResult**][type-parseresult]

### `writeFile(path, metadata, content[, options[, cb]])`
Writes the generated content into a file.

#### Params
- **String** `path`: The file path.
- **Object** `metadata`: The metadata object.
- **String** `content`: The markdown content.
- **Object** `[options]`: The stringify options.
- **Function** `[cb]`: The callback function.

### `parseFile(path[, options[, cb]])`
Parses a markdown file.

#### Params
- **String** `path`: The file path.
- **Object** `[options]`: The parser options.
- **Function** `[cb]`: The callback function.

#### Return
- [**ParseResult**][type-parseresult] Only **if `cb` was omitted**.

---

### Type: `ParseResult`
An object containing the following fields:

- **String** `markdown`: The Markdown content.
- **Object** `metadata`: The parsed metadata.
- **String** `rawMeta`: The raw metadata content.
- **String** `html`: The generated HTML from Markdown.

[type-parseresult]: #type-parseresult
