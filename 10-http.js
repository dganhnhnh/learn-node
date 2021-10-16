const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('welcome to our homepage')
    }
    if(req.url==='/about'){
        res.end('so about us...')
    }
    res.end(`
        <p>sorry, we couldn't find the page you are searching for</p>
        <a href='/'>back home</a>
    `)
})

server.listen(5000)
    //listen to specified port??