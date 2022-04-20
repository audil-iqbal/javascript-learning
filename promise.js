let p =  new Promise((resolve,reject) => {
    //some task return success or failed executing like try/catch
    let result=true;
    if(result){
        resolve({'code':200,'msg':'Success'});
    }else{
        reject({'code':400,'msg':'Failed'});
    }
})

p.then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

//implement caching function

function cache(fn,context){
    let res = {};
    return function (...params) {
        let args = JSON.stringify(params);
        if(!res[args])
         res[args] = fn.call(context || this,...params);
        return res[args];
    }
}

function product(n1,n2) {
    for(let i=0;i<9999999;i++){}
    return n1*n2;
}

let cachedproduct = cache(product);

console.time('start');
console.log(cachedproduct(6,8));
console.timeEnd('start');

console.time('second');
cachedproduct(6,8);
console.timeEnd('second');
