const EventEmitter = require('events');  
const Emitter = new EventEmitter();  
const greet = (name) =>{  
    console.log(`Hello,${name}! Welcome to node js`);  
}  
Emitter.on('greet',greet);  // attaching the greet fuction on 'greet'
Emitter.emit('greet', 'Manoj');  // emitting 'Manoj' on 'greet'
Emitter.on('SayHallo', (hello)=>{   // directly the emitter is called on the identifier
    console.log(`event listner triggered ${hello }`);  
})  
Emitter.emit('SayHallo', "abd");  
Emitter.emit('SayHallo', "");  
Emitter.emit('SayHallo', "");  
Emitter.off('greet',greet);  
Emitter.emit('greet','Manoj'); 
Emitter.off('SayHallo',()=>{});