import path from 'path';
import {fileURLToPath} from 'url';

console.log("BaseName ",path.basename('/foo/bar/baz/asdf/index.html'))

const fileName = fileURLToPath(import.meta.url)
console.log(fileName)
const dirname = path.dirname(fileName)
console.log(dirname)

const fullPath = path.join(dirname, 'example', 'output.txt')
console.log('path create: ',fullPath);
 
const filePath = '/foo/bar/baz/asdf/index.html'
console.log("file extName: ",path.extname(filePath))
