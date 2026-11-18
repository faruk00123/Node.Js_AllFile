import fs from 'fs';
const writeableStream = fs.createWriteStream('files/output.txt')

// writing data in chunks
writeableStream.write('This is the 1 chunk. \n')
writeableStream.write('This is the 2 chunk. \n')
writeableStream.write('This is the 3 chunk. \n')
writeableStream.write('This is the 4 chunk. \n')
writeableStream.write('This is the 5 chunk. \n')
writeableStream.write('This is the 6 chunk. \n')

writeableStream.end('This is the end line. \n')

writeableStream.on('finish', ()=>{
    console.log('end....')
})