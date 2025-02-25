import { File } from './files';

const fileManager = new File();

fileManager.read('./src/index.html');

console.log(fileManager.file);
