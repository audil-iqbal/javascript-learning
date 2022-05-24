var index = 0;
var cats = ["","im having interview with atlassian","interviewer is mohsin iqbal"];
var colorArray = ['yellow','red','blue'];

var slides = document.getElementsByClassName('slides');

var nextarrow = document.getElementById('next');
var prevarrow = document.getElementById('previous');

var place = document.getElementById('place');
var dotsContainer = document.getElementById('dotsContainer');
var dotArray = document.getElementsByClassName('dots');

createDots();
showSlides(index);

function createDots(){
    for(let i = 0; i<slides.length;i++){
        var dot = document.createElement('span');
        dot.className = "dots";
        dotsContainer.appendChild(dot);
    }
}

function showSlides(x){
    
    if( x > slides.length - 1 ){
        index = 0;
    }
    if(x < 0){
        index = slides.length - 1;  
    }
    for(let i=0;i<slides.length;i++){
        slides[i].style.display = 'none';
        // dotArray[i].className = "dots";
    }
    slides[index].style.display = 'block';
    slides[index].style.backgroundColor = colorArray[index];
    // dotArray[index].className += 'activeDot';
    // place.innerHTML = cats[index];
}

nextarrow.onclick = function(){
    index++;
    showSlides(index);
}

prevarrow.onclick = function(){
    index--;
    showSlides(index);   
}

// dotArray[0].onclick = showSlides(0);
let userArray = [];
fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => {
        userArray = users
        dotsContainer.innerText = userArray.map(user => user.name).join("\n")
        console.log(userArray);
    })
