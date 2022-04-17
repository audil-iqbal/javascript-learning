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

let arr = ['audil',4,'iqbal'];