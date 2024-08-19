const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('start', (res) => {
  console.log(`data received is ${ res }`);
  
})

eventEmitter.on('start', (res) => {
  console.log(`data received is ${ res }`);
  
})
eventEmitter.emit('start', '77')
