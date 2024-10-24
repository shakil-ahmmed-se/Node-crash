import { EventEmitter} from 'events'

const myEmitter = new EventEmitter();

function greetHandler(){
    console.log('Hello world!');
}

function goodbyeHandler() {
    console.log('goodbye world!');
}

myEmitter.on('greet', greetHandler)
myEmitter.on('goodbye', goodbyeHandler)


myEmitter.emit('greet')
myEmitter.emit('goodbye')