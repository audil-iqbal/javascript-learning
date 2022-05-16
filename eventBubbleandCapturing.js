//Event Bubbling is calling event listener from child (when clicked) to parent
//Event capturing/trickling is calling event listener from parent(when clicked) to child
console.log('Event Bubbling and Capturing');

document.querySelector('#gp').addEventListener('click',function(){
    console.log('Grand parent');
},true);

document.querySelector('#p').addEventListener('click',function(e){
    console.log('parent');
    e.stopPropagation();
},true);

document.querySelector('#c').addEventListener('click',function(){
    console.log('child');
},true);

//dispatch custom event and bubble to dccument
document.addEventListener('hello',event => {
    console.log('hello from ' + event.target.tagName + ", istrust: "+ event.isTrusted);
});

let cevent = new Event('hello',{bubbles:true});
document.getElementById('events').dispatchEvent(cevent);
