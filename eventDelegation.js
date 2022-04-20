console.log("Event delegation");

document.querySelector('#category').addEventListener('click', event => {
    console.log('category clicked:',event.target.id);
})

document.querySelector("#formid").addEventListener('keyup',e =>{
    if(e.target.dataset.uppercase!=undefined){
        e.target.value = e.target.value.toUpperCase();
    }
})