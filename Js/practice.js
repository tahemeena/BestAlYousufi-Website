

var colors = ['red','green', 'black','brown','white','lime']
var bgcolor = document.getElementById('bg-color');

var btn = document.querySelector('.btn');
btn.addEventListener('click',function(){
    console.log();

    var numbers= getRandom();
    document.body.style.backgroundColor= colors[numbers];
    bgcolor.textContent= colors[numbers];
    
})

function getRandom() {
    return Math.floor(Math.random() * colors.length);
}