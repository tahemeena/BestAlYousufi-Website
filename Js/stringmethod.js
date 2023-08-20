
var str = 'math is my fav subject.My daughter also like math.';
var str1 = 'excited to learn new technologies.';
var str2 = 'hello';

console.log(str.length); // str length()

console.log(str.slice(2 , 10)); // str slice()

console.log(str.substring(7,10)); // string substr()

console.log(str.replace('math','science')); //string replace()

console.log(str.replaceAll('math','Js')); //String replaceAll()

console.log(str.toUpperCase()); //string toUpperCase()

console.log(str.toLocaleLowerCase());  //string toLowerCase()

console.log(str.concat(str1)); // string concat()

console.log(str.trim());  // string trim()    //remove all the extra space

console.log(str.trimStart());   // string trimStart()

console.log(str.trimEnd());    // string trimEnd()

console.log(str.charAt(1));  // string charAt()

console.log(str.charCodeAt(2));  // string charCodeAt()

console.log(str2.split(','));