const EventEmitter = require('events');  
const Emitter = new EventEmitter();  
const greet = (name) =>{  
    console.log(`Hello,${name}! Welcome to node js`);  
}  
Emitter.on('greet',greet);  
Emitter.emit('greet', 'Manoj');  
Emitter.on('SayHallo', ()=>{  
    console.log('event listner triggered');  
})  
Emitter.emit('SayHallo');  
Emitter.emit('SayHallo');  
Emitter.emit('SayHallo');  
Emitter.off('greet',greet);  
// Emitter.removeListener('greet', greet);
// Emitter.removeAllListeners('greet', greet);

Emitter.emit('greet','Manoj');  