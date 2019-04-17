import { DumpOptions } from 'js-yaml';
import { ConverterOptions } from 'showdown';

export = mdify;

declare class mdify {

    static parse(input: string, opts?: mdify.parseOptions): mdify.parseResult;

    static parseFile(path: string, opts?: mdify.parseOptions): mdify.parseResult;

    static parseFile(path: string, opts?: mdify.parseOptions, cb?: (error: Error, result: mdify.parseResult) => void): void;

    static stringify(metadata: any, content: string, options?: mdify.stringifyOptions): string;

    static writeFile(path: string, metadata: any, content: string, options?: mdify.stringifyOptions, cb?: any): void;

}


declare namespace mdify {
    type stringifyOptions = {
        start?: string,
        end?: string,
        yamlOptions?: DumpOptions,
    };

    type parseOptions = {
        start?: string,
        end?: RegExp,
        html?: boolean,
        converterOptions?: ConverterOptions,
    };

    type parseResult = {
        markdown: string,
        metadata: any,
        rawMeta: string,
        html: string,
    };
}