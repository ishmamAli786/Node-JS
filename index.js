/// event module
/// node.js has a build in module, called events
/// where you can create fire and listen for your own events
/// example-1 registering for the event to be fired only one time using oncd.
/// example-2 create an event emitter instance and register a couple of callbacks
/// example-3 registering for the event with callback parameters


const EventEmitter=require('events');
const event=new EventEmitter();
event.on('sayMyName',()=>{
    console.log('my name is ishmama ali khan')
})
event.on('sayMyName',()=>{
    console.log('my name is ishmama ali khan')
})
event.on('sayMyName',()=>{
    console.log('my name is ishmama ali khan')
})
event.on('checkPage',(sc,msg)=>{
    console.log(`status code is ${sc} and the page is ok`)
})
event.emit('checkPage',200,'ok');
