const EventEmitter = require('events')

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter() 

myEmitter.on('event1', () => {
    console.log('event1 was triggered 1')
})

myEmitter.on('event1', () => {
    console.log('event1 was triggered 2')
})

console.log(myEmitter.listeners('event1'))

myEmitter.once('event2', () => {
    console.log('event2 was triggered once')
})

const listener = () => {
    console.log('event3 was triggered and will be removed')
}
myEmitter.on('event3', listener)

myEmitter.emit('event1')
myEmitter.emit('event2')
myEmitter.emit('event2')
myEmitter.emit('event3')
myEmitter.removeListener('event3', listener)
myEmitter.emit('event3')

myEmitter.removeAllListeners('event1')
myEmitter.emit('event1')

console.log(myEmitter.listeners('event1'))
console.log(myEmitter.listeners('event3'))