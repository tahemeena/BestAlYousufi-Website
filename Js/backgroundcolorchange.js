
var colors =['green','red','blue','lime','brown'];



     var colorbtn = document.getElementById('color-btn');

  colorbtn.addEventListener('click',function(){

     var randomNum = getRandom();
    document.body.style.backgroundColor= colors[randomNum];
    console.log(colors[randomNum]);
  })

  function getRandom() {
    return Math.floor( Math.random()* colors.length) ;

  }

     


