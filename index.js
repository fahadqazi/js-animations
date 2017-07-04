console.log('hi');
var button = document.getElementById('button');
console.log(button);
var box = document.getElementById('box');
console.log(box);

var func = function(){
    console.log('what')
    // console.log(box);
    box.classList.add('animate')
}