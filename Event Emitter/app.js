import EventEmitter from 'node:events';

// create server
function createServer (){
    const eventEmitter = new EventEmitter();

    // connect user to server
    function connect (user){
       console.log(`${user} is connecting...`)
       eventEmitter.emit('userConnected', user)
    } 

    // disconnect user from server
    function decconnect (user){
       console.log(`${user} is disconnecting...`)
       eventEmitter.emit('userDisConnected', user)
    } 

    return {
        connect,
        decconnect,
        on: eventEmitter.on.bind(eventEmitter),
        emit: eventEmitter.emit.bind(eventEmitter)
    }
}


// create server instace
const chatServer = createServer();

// connect user to server call
chatServer.on('userConnected', (user)=>{
   console.log(`welcome ${user}`)
})
chatServer.connect('Omar')

// disconnect user from server call
chatServer.on('userDisConnected', (user)=>{
   console.log(`Good Bye ${user}`)
})
chatServer.decconnect('Omar')