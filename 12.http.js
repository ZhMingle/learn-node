const http = require('http')

const server = http.createServer((req, res) => {
  if(req.url === '/'){
    res.end('this is the home page')
  }
  if(req.url === '/about') {
    res.end('this is the about page')
  }
  res.end(`<h1>Oops </h1>
    <h2>404</h2>
    <a href="/">go back</a>
    `)
  // res.write('hello, this is a home page')
  // res.end()
})


server.listen(5000)

