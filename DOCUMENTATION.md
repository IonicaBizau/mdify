## Documentation

You can see below the API reference of this module.

### `stringify(metadata, content)`
Stringify metadata and content.

#### Params
- **Object** `metadata`: The metadata object.
- **String** `content`: The markdown content.

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

### `writeFile(path, metadata, content, cb)`
Writes the generated content into a file.

#### Params
- **String** `path`: The file path.
- **Object** `metadata`: The metadata object.
- **String** `content`: The markdown content.
- **Function** `cb`: The callback function.

### `parseFile(path, opts, cb)`
Parses a markdown file.

#### Params
- **String** `path`: The file path.
- **Object** `opts`: The parser options.
- **Function** `cb`: The callback function.

