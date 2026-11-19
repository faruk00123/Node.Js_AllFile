import fs from 'fs'

// traditionally read data from a file
fs.readFile('files/text.txt', 'utf-8', (err, data)=>{
   if(err) throw err;
   console.log(data.length)
})
fs.writeFile('files/newText.txt', 'Hello Omar','utf-8', (err)=>{
    if(err) throw err;
    console.log('data joine done')
})

// streming to a file
const streming = fs.createReadStream('files/text.txt', {
    encoding: 'utf-8',
    highWaterMark: 200 
})
streming.on('data', (ch)=>{
    console.log(ch.length)
})
streming.on('end', ()=>{
    console.log("data end")
})