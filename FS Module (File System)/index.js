// fs.read
import { readFile } from 'node:fs';

readFile('files/example.txt','utf-8',(err, data)=>{
   if(err) throw err;
   console.log(data)
})

// fs.write
import { writeFile } from 'node:fs';
const content = "Hello I am Omar"
writeFile('files/messege.txt', content, 'utf-8', (err)=>{
    if(err) throw err;
    console.log("File created done")
})