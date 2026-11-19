import fs from 'fs'

const source = fs.createReadStream('files/text.txt')
const destination = fs.createWriteStream('files/project.txt')

// source and destination added
source.pipe(destination)

source.on('end', ()=>{
    console.log('file copied successfully')
})