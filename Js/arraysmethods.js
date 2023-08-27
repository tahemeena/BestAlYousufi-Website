

var fruits= ['Apple','banana','kiwi','Lemon'];
var arr2 = ['Tomato','onion','cucumber'];
var arr3 = ['watermelon','pear','berry'];

var num = [[1,4,5],[7,8,9],[10,5,4],[0,9,7]];


console.log(fruits.push('orange')); //push() -add element in last
console.log(fruits);

console.log(fruits.pop());  //pop() -remove last element
console.log(fruits);

console.log(fruits.shift()); // shift() - remove first element
console.log(fruits);

console.log(fruits.unshift('chickoo'));  // unshift() - add element in first position
console.log(fruits);

console.log(fruits.length); // length

console.log(fruits.toString());   // toString() - array convert into string

console.log(fruits.join('*********')); // join() - join the content or elements

// console.log(delete fruits[0]);  // delete - delete the element but with empty space 
// console.log(fruits);

console.log(fruits.concat(arr2 , arr3));

console.log(num.flat());     // flat() - subarray elements convert into the single array

console.log(fruits);

console.log(fruits.splice(4,0,"lichi",'blackberry')); 
console.log(fruits);

// Sorting Array

console.log(arr3.sort());

// Reverse Array

console.log(arr3.reverse());

//Numbers sorting

var num1 = [100,20,10,40,5,2,90,23];

console.log(num1.sort(function(a,b){
    return a-b;
    
}));


// print lowest value in array
console.log(num1.sort(function(a,b){return a-b;}));
console.log(num1[0]);

//print higher value in array

console.log(num1.sort(function(a,b){
    return b-a;
}));
console.log(num1[0]);


console.log(Math.min.apply(null,num1));

console.log(Math.max.apply(null,num1));















