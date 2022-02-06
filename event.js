const EventEmitter= require('events')

const emitter= new EventEmitter()

emitter.on('sendMessage',(arg)=>{
    console.log('You are trying to send some information')
})

let count=1

let id= setInterval(()=>{
    if(count===10){
        clearInterval(id)
    }
    emitter.emit('sendMessage',count++)
},1000)