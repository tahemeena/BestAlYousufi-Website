



const fruits = ['lemon', 'banana', 'orange', 'pineapple', 'kiwi', 'pears', 'berrys', 'muskmelon', 'watemelon'];



function joinFruits(separator) {
    let result = '';
    fruits.forEach((fruit, index) => {
       if(index == 0) {
        result = fruit;
       } else {
        result = result + separator + fruit;
       }
    })


    console.log(result);
}

















