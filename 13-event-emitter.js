const EventEmitter=require('events')

const anEmitter=new EventEmitter()


anEmitter.on('response',(name,id)=>{
    console.log(`data received for user ${name} with id ${id}`)
})
anEmitter.on('response',()=>{
    console.log(`br `)
})
anEmitter.emit('response','kurosaki',666)