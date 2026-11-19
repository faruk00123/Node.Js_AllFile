import { Transform } from 'stream'

const trans = new Transform({
    transform(inputValue, textFormet, callback){
        this.push(inputValue.toString().toUpperCase())
        callback();
    }
})

process.stdin.pipe(trans).pipe(process.stdout) 