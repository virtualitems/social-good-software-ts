import * as fs from 'fs';


export class File
{

    protected _file: null | string;
    protected _path: null | string;
    protected _encoding: null | BufferEncoding;

    constructor()
    {
        this._file = null;
        this._path = null;
        this._encoding = null;
    }

    get file(): null | string
    {
        return this._file;
    }

    get path(): null | string
    {
        return this._path;
    }

    public read(filePath: string, encoding: BufferEncoding = 'utf-8'): void
    {
        try {
            this._file = fs.readFileSync(filePath, encoding);
            this._path = filePath;
            this._encoding = encoding;
        } catch (err) {
            throw err;
        }
    }

    public update(content: string): void
    {
        if (this._path === null) {
            throw new Error('No file path provided');
        }

        try {
            fs.writeFileSync(this._path, content, this._encoding);
            this._file = content;
        } catch (err) {
            throw err;
        }
    }

    public delete(): void
    {
        if (this._path === null) {
            throw new Error('No file path provided');
        }

        try {
            fs.unlinkSync(this._path);
            this._file = null;
        } catch (err) {
            throw err;
        }
    }
}
