async function fetchDataJSON() {
  const response = await fetch('https://dummyjson.com/products');
  const dummydata = await response.json();
  return dummydata;
}

var results = 0;
var productList = document.querySelector('.product-list');
var productCard = document.querySelector('.product-card');
var categoryList = document.querySelector('.list');
var brandList = document.querySelector('.brand-list');

fetchDataJSON().then(data => {
  
  productCard.append(productList);
   
  let productHTML = showData(data);
  productList.innerHTML = productHTML;
   
});

function showData(data) {

  let productHTML = '';
  let categories = [];
  let brands = [];

  data.products.forEach(product => {
      productHTML = productHTML +     `
      <div class="product-info">
      <div class="product-img"><img src="${product.thumbnail}" /></div>
              <div>${product.id}</div>
              <div>${product.title}</div>
              <div>${product.description}</div>
              <div>${product.price}</div>
              
              <div>${product.discountPercentage}</div>
              <div>${product.brand}</div>
              <div>${product.category}</div>
      </div>
      `
      if(!categories.includes(product.category)) {
        categories.push(product.category);
      }
      
      if(!brands.includes(product.brand)) {
        brands.push(product.brand);
      }
      
  });
  
  // console.log(data);
  // console.log(categories);
  // console.log(brands);
 
  
  let productCategory = showProductCategories(categories);
   categoryList.innerHTML = productCategory;


   let productBrands = showProductsBrands(brands);
   brandList.innerHTML = productBrands;
   

  return productHTML;
  
}




function showProductCategories(cats) {
  
  let productCategory ='';

   cats.forEach(cat => {
     
    productCategory = productCategory + `<li class="item"> <a href="" >${cat}</a></li>`;

   })

 return productCategory;
}


function showProductsBrands(brands) {
  console.log(brands);

  let productBrands ='';

   brands.forEach(brand => {
     
    productBrands = productBrands + `<li class="item"> <a href="" >${brand}</a></li>`;

   });
  
 return productBrands;
}





const accordion = document.getElementsByClassName('acc-container');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}


































