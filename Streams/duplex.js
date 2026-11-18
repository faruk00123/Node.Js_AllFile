import { Duplex } from 'stream'

const duplexstream = new Duplex({
    write(chunk, encoding, callback){
        console.log(`writing: ${chunk.toString()}`)
        callback()
    },
    read(){
        this.push("Hello from duplex 1! \n")
        this.push("Hello from duplex 2! \n")
        this.push("Hello from duplex 3! \n")
        this.push(null)
    }
})
duplexstream.on('data', (chunk)=>{
    console.log(`Reading: ${chunk.toString()}`)
})

duplexstream.write('this is a test writing...')
duplexstream.end()