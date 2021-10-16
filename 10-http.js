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

// const http=require('http')
// const server= http.createServer((req,res)=>{
//     if(req.url==='/'){
//         res.end('homepage')
//     }
//     //BLOCKING CODE
//     if(req.url==='/about'){
//         for(let i=0;i<500;i++){
//             for (let j=0;j<500;j++){
//                 console.log(`${i} ${j}`)
//             }
//         }
//         res.end('about page')
//     }
//     res.end('error! page')
// })
// server.listen(5000,()=>{
//     console.log("server listening on p5000")
// })