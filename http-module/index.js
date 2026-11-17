import http from 'http'

const server = http.createServer((req, res)=>{
   res.writeHead(200, {'content-type' : 'text/plain'})
   res.end('Hello From Node.js server running...!')
})

// star the server
server.listen(300, ()=>{
    console.log("The server is listening on port 3000")
})