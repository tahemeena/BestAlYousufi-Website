
const reviews = [
    {
        id: 1,
        name: 'susan smith',
        job: 'web developer',
        img: 'https://www.course-api.com/images/people/person-1.jpeg',
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: 'anna johnson',
        job: 'web designer',
        img: 'https://www.course-api.com/images/people/person-2.jpeg',
        text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
        id: 3,
        name: 'peter jones',
        job: 'intern',
        img: 'https://www.course-api.com/images/people/person-3.jpeg',
        text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
        id: 4,
        name: 'bill anderson',
        job: 'the boss',
        img: 'https://www.course-api.com/images/people/person-4.jpeg',
        text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
];


var img = document.querySelector('#person-img');
var author = document.querySelector('#author');
var job = document.querySelector('#job');
var info = document.querySelector('#info');

var prevbtn = document.querySelector('.prev-btn');
var nextbtn = document.querySelector('.next-btn');
var buttons = document.querySelectorAll('.btn');
var randombtn = document.querySelector('.random-btn')

let currentItem = 0;

window.addEventListener("DOMContentLoaded", () => {
    showPerson(currentItem);
  });

  function showPerson(item) {
    img.src = reviews[item].img;
    console.log(img.src);
    author.textContent = reviews[item].name;
    job.textContent = reviews[item].job;
    info.textContent = reviews[item].text;
    
  
  }
  
buttons.forEach((btn)=> {
    btn.addEventListener('click', function(e) {
        var style = this.classList;
           console.log(style);

           if(style.contains = ('next-btn') ){
              if(currentItem < reviews.length-1) {
                currentItem++;
                showPerson(currentItem);
              }
              else {
                currentItem--;
                showPerson(currentItem);
                   currentItem = 0;
              }
              
           }
    });
});
  
randombtn.addEventListener('click', () => {
    getRandom();

})

function getRandom() {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
    console.log(currentItem);
}

