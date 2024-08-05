const os = require('os');


const currentOS = {
  user: os.userInfo(),
  uptime: os.uptime(),
  type: os.type(),
  release: os.release(),
  totlalmem: os.totalmem(),
  freemem: os.freemem()
}

console.log(currentOS);
