var button = document.getElementById('button');
var box = document.getElementById('box');
var stop = document.getElementById('stop');

var func = function(){
    box.classList.add('animate')
}

// var fun1 = function(){
//     box.classList.remove('animate');
// }

box.addEventListener('animationend', function(){
    console.log('ended');
    box.classList.remove('animate');
    
})