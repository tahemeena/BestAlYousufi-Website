
 fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then((data) => {

            console.log(data);
        });


//  fetch('https://jsonplaceholder.typicode.com/todos')
//  .then(res => res.json())
//  .then((data) => {
//     console.log(data);
//     console.log(data.id);
//  })


 async function fetchDataJSON() {
    const response = await fetch('https://dummyjson.com/products');
    const dummydata = await response.json();
    return dummydata;
  }
  
  fetchDataJSON().then(item => {
    console.log(item); 
  });