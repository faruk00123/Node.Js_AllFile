import http from 'http'

const server = http.createServer((req, res)=>{
    console.log("Request Method: ", req.method)
    // set response headers
    res.writeHead(200, {'content-type' : 'text/plain'})

    // send response
    if(req.method === "GET"){
       res.end('GET Request')
    }else if(req.method === "POST"){
        res.end("POST Request")
    }else if(req.method === "PUT"){
        res.end("PUT Request")
    }else{
        res.writeHead(404, {'content-type':'text/plain'})
        res.end('404 Not Found')
    }

})

// start server
const port = 3000
server.listen(port, ()=>{
    console.log("running...")
})