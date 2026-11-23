import http from 'http'
const server = http.createServer((req, res)=>{
    const {url: pageUrl} = req
    console.log(pageUrl)


    // basic routing
    if(pageUrl === '/'){
        res.end(`Welcome to the Blog Home page`)
    }else if(pageUrl === '/about'){
        res.end(`Page Name: ${pageUrl}`)
    }else if(pageUrl === '/contact'){
        res.end(`Page Name: ${pageUrl}`)
    }else if(pageUrl === '/product'){
        res.end(`Page Name: ${pageUrl}`)
    }else if(pageUrl.startsWith('/product/')){
        const postId = pageUrl.split("/")[2]
        
        res.end(`Single Product: ${postId}`)
    }
    else{
        res.end('Page is not found')
    }
    
})
const port = process.env.PORT || 3000
server.listen(port,()=>{
    console.log("Server Start...", port)
})