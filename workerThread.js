//node file to be executed

const { Worker, isMainThread, parentPort } = require('worker_threads');

if(isMainThread){
    console.log('Main thread code');

    //Create the worker
    const worker = new Worker(__filename);

    //Listen for messages from the worker and print them
    worker.on('message',msg => console.log(msg));

}else{
    //this code is executed in worker

    //send a message to main thread;
    parentPort.postMessage('Hello World');
}