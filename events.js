// const EventEmitter = require('events');

// const emitter = new EventEmitter();

// emitter.on('greetings', (data) => {
//   console.log('data :>> ', data);
// });

// emitter.emit('greetings', 'Hello World!');


const { EventEmitter } = require('events');
const greetingEmitter = new EventEmitter();

// called only once
greetingEmitter.once('greetings', message => {
  console.log(`Will execute only once: ${message}`);
});

// Emitting the 'greetings' event multiple times
greetingEmitter.emit('greetings', 'Hello, world!');
greetingEmitter.emit('greetings', 'Hi again!');
