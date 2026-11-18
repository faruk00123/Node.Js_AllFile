import EventEmitter from 'node:events';

const eventEmitter = new EventEmitter()

eventEmitter.on('s', (name, roll, n1, n2)=>{
    console.log(`Hi, this is ${name} and roll ${roll} and gpa ${n1 + n2}`)
})

eventEmitter.emit('s', 'Omar', 282, 2, 1.45)