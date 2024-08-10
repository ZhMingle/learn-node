const { readFileSync, writeFileSync }  = require('fs')

const first = readFileSync('./content/first.txt','utf-8')

writeFileSync('./content/tt.txt','99', { flag: 'a'})  // flag: 'a' is used for append...

console.log(first);
