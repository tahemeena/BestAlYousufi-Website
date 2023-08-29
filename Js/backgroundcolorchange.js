
// Background color Change

var colors =['green','red','blue','lime','brown'];



     var colorbtn = document.getElementById('color-btn');
     var colorspan = document.getElementById('color-span');
     
     

  colorbtn.addEventListener('click',function(){

     var randomNum = getRandom();
    document.body.style.backgroundColor= colors[randomNum];
    console.log(colors[randomNum]);
    colorspan.textContent = colors[randomNum];
  })

  function getRandom() {
    return Math.floor( Math.random()* colors.length) ;

  }

     
   // Counter Application

   var counter=0;
   var counterId = document.getElementById('counter-id');

   var buttons = document.querySelectorAll('.btn');

   buttons.forEach((e)=>{
    e.addEventListener('click',function(item){
       var style = e.classList;
       console.log(style);

       if(style.contains('increment')){
         counter++;
         counterId.textContent=counter;
       }
       else if(style.contains('reset')) {
        counter = 0;
        
       }
       else {
        counter--;
       }
       counterId.textContent = counter;
    })
   })

   


    
  
  