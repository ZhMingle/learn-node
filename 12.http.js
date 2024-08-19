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

console.log(3);

server.listen(5000, () => {
  console.log('Server listening on port: 5000');
  
})
console.log(5);


