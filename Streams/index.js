import fs from 'fs';

// create a readable stream
const readableStream = fs.createReadStream('files/text.txt', {
    encoding: 'utf-8',
    highWaterMark: 1024
})

readableStream.on('data', (da)=>{
   console.log(`Reseived chunk ${da}`)
})
readableStream.on('end', ()=>{
    console.log("File reading done")
})