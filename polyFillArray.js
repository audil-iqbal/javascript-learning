//foreach

let arr = [5,2,3,1,6];

//forEach, map, filter, find takes 3 args (item,index,array)

//polyfill for foreach
Array.prototype.myForEach = function(callback){
    for(let index = 0; index < this.length; index++){
        callback(this[index],index,this);
    }
}

//polyfill for map
Array.prototype.myMap = function(callback) {
    let result = [];
    for(let index = 0; index < this.length; index++){
        result.push(callback(this[index],index,this));
    }
    return result;
}

//polyfill for filter
Array.prototype.myFilter = function(callback) {
    let result = [];
    for (let index = 0; index < this.length; index++) {
        if(callback(this[index],index,this))
        result.push(this[index]);
    }
    return result;
}

//polyFill for find
Array.prototype.myFilter = function(callback) {
    for (let index = 0; index < this.length; index++) {
        if(callback(this[index],index,this))
        return this[index];
    }
    return null;
}

//polyfill for reduce
//reduce params: (accumulator, curr, index, array)
//if initial value if null then acc is arr[0] and index:1
Array.prototype.myReduce = function(callback,initialvalue){
    let acc = initialvalue !=null ? initialvalue : this[0];
    let index = initialvalue !=null ? 0 : 1;
    for (; index < this.length; index++) {
        acc = callback(acc,this[index],index,this);
    }
    return acc;
}
