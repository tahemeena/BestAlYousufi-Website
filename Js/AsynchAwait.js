async function fetchDataJSON() {
  const response = await fetch('https://dummyjson.com/products');
  const dummydata = await response.json();
  return dummydata;
}

var results = 0;
var productList = document.querySelector('.product-list');
var productDetails = document.querySelector('.product-details');
var categoryList = document.querySelector('.list');
var brandList = document.querySelector('.brand-list');
var totalproducts = document.querySelector('.product-features');
var listView = document.querySelector('.btn-listview');



fetchDataJSON().then(data => {
  
  productDetails.append(productList);
   
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
      <div class="product-content">
      <div class="product-brand">${product.brand}</div>
      <div class="product-title">${product.title}</div>
      <div class="product-price"> Price: $${product.price}</div>
      <div class="product-discount"> Discount: ${product.discountPercentage}%</div>
      <div class="product-category">${product.category}</div>
      <div class="btns"><button class="btn add-btn">Add to cart</button></div>

      </div>

            
      </div>

      `
      if(!categories.includes(product.category)) {
        categories.push(product.category);
      }
      
      if(!brands.includes(product.brand)) {
        brands.push(product.brand);
      }
      
      
  });
  
  console.log(data.products.length);
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

listView.addEventListener('click', function() {
  
  console.log(productList);
  productList.classList.toggle('listview');
  var viewIcon = document.querySelector('.js-view-icon');
  viewIcon.classList.toggle('fa-th');
  viewIcon.classList.toggle('fa-list');
  });



const accordion = document.getElementsByClassName('acc-container');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}





