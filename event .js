// Import the EventEmitter class from the 'events' module
const EventEmitter = require('events');

// Create a class that extends EventEmitter
class MyEmitter extends EventEmitter {}

// Instantiate an object of MyEmitter
const myEmitter = new MyEmitter();

// Define an event listener for the 'greet' event
myEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
});

// Emit the 'greet' event with a name
myEmitter.emit('greet', 'Alice');

// You can also add multiple listeners for the same event
myEmitter.on('greet', (name) => {
    console.log(`Welcome, ${name}!`);
});

// Emit the event again
myEmitter.emit('greet', 'Bob');

// Define another event listener for a different event
myEmitter.on('farewell', (name) => {
    console.log(`Goodbye, ${name}!`);
});

// Emit the 'farewell' event
myEmitter.emit('farewell', 'Charlie');
