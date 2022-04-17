console.log('Javascript');

//debounce code -> time difference b/w 2 function call is 'delayed'
let count = 0;
const getdata = () => {
    // calls an API and gets data
    console.log('input clicked', count++);
}

const debounce = function (fn, delay) {
    let timer;
    return function () {
        let context = this, args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            getdata.apply(context, arguments);
        }, delay);
    }
}
const betterfunction = debounce(getdata, 2000);

//throttling code -> make function call every after 'limit' time passes
const expensize = () => {
    console.log('Expensive');
}

const throttle = (func,limit) => {
    let flag = true;
    return function(){ 
        let context = this, args = arguments;
        if (flag) {
            func.apply(context,args);
            flag=false;
            setTimeout(() => {
                flag = true;
            }, limit);
        }
    }
}

const betterfunction2 = throttle(expensize,200);
window.addEventListener("resize",betterfunction2);

//throttle end