console.log(22);
// readFile setTimeout server
const { readFile } = require('fs')
readFile('./content/first.txt','utf8', (err, result) => {
  if(err) {
    console.log(err)
    return 
  }
  const first = result;
  console.log('dd');
  
})
setTimeout(() => {
  console.log('timeout');
}, 10)



console.log(44);
