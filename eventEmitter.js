//node file to be executed
const EventEmitter = require('events');

const emitter = new EventEmitter();

//order of registering events is important as its invoked sequentially in same order
//also emit should be called after event register else nothing would happen

//register a listener
emitter.on('messaged',function(params) {
    console.log('Listener called',params);
});

//raise an event
emitter.emit('messaged','audil iqbal');