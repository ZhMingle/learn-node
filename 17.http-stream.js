// const { createReadStream } = require('fs')

// const stream = createReadStream('./content/big.txt', {
//   highWaterMark: 2000, // no more than 2000 of each pice
//   encoding: 'utf-8'
// })

// stream.on('data', (r) => {
// console.log("🚀 ~ stream.on ~ r:", r)

// })

// stream.on('error', (e) => {
//   console.log("🚀 ~ stream.on ~ e:", e)

// })

var http = require("http");
var fs = require("fs");

http
  .createServer((req, res) => {
    // const t = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(t);
    const fileStream = fs.createReadStream("./content/big.txt", "utf8");
    fileStream.on("open", () => {
      fileStream.pipe(res);
    });
    fileStream.on("error", (e) => {
      res.end(e);
    });
  })
  .listen(5000);
