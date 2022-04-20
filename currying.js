//implement infinite currying
// add(3)(4)(2)(1)();

function add(a){
    return function (b) {
        if(b) return add(a+b);
        return a;
    }
}

// console.log(add(4)(5)(10)());

let array = [2,3,4,[2,8,[1,5],3],10];
console.log('2:',array.flat(1));
// console.log(arr.reduce((acc,cur) => acc.concat(cur),[]));

//custom flat
//not working
function customFlat(arr,depth=1) {
    let result = [];
    [...arr].forEach(element => {
        if(Array.isArray(arr) && depth>0){
            result.push(...customFlat(element,depth-1));
        }else result.push(element);
    });
    return result;
}
console.log('audil',customFlat(array));