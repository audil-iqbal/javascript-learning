//implement own function for bind (incase if browser doesnt supports it)
console.log('Polyfill for bind');
let fullname = {
    firstName: 'Audil',
    lastName: 'Iqbal'
}

let printName = function(hometown,state){
    console.log(this.firstName + " " + this.lastName + ", " + hometown + ":" + state);
}

let printMyName = printName.bind(fullname,"Kanpur");
printMyName("UP");

//implement mybind
Function.prototype.mybind = function(...args){
    let obj = this, params = args.slice(1);
    return function(...args2) {
        obj.call(args[0],...params,...args2);
    }
}

let printMyName2 = printName.mybind(fullname,"Kanpur");
printMyName2("Up");
