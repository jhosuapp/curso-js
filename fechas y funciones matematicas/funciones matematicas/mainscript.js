function math(min, max){
    return Math.ceil(Math.random() * (max - min) + min);
}


var getObject = document.querySelector('.object');


getObject.addEventListener('mouseover', ()=>{
    getObject.style.top = math(1, 1000) + "px";
    getObject.style.right = math(1, 500) + "px";
});

