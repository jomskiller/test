const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.write('welcome to our home page')
        res.end(); // End the response
    }
    if(req.url == '/about'){
        res.write('welcome to our about page')
        res.end(); // End the response
    }
    res.end(`<h1>This Content Dont Exist</h1>`)
})

server.listen(5000)