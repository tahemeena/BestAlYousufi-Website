var AllProducts = [];
var results = 0;
var productList = document.querySelector('.product-list');
var productDetails = document.querySelector('.product-details');
var categoryList = document.querySelector('.list');
var brandList = document.querySelector('.brand-list');
var listView = document.querySelector('.btn-listview');
var totalproducts = document.querySelector('.total-products');

async function fetchDataJSON() {
  const response = await fetch('https://dummyjson.com/products');
  const dummydata = await response.json();
  return dummydata;
}

fetchDataJSON().then(data => {

  console.log('fetchDataJSON', data);
  AllProducts = data.products;
  
  productDetails.append(productList);
   
  let productHTML = showData(data.products);
  productList.innerHTML = productHTML;

  let totalcount = showTotalcount(data);
  totalproducts.innerHTML = totalcount;

  showCategories(data.products);
   
});




function showTotalcount(data) {
   return data.products.length;
}


function showCategories(products) {

  let categories = [];
  let brands = [];

  products.forEach(product => {
    
    if(!categories.includes(product.category)) {
      categories.push(product.category);
    }
    
    if(!brands.includes(product.brand)) {
      brands.push(product.brand);
    }
  
});



let productCategory = showProductCategories(categories);
 categoryList.innerHTML = productCategory;


 let productBrands = showProductsBrands(brands);
 brandList.innerHTML = productBrands;
 
 eventbind();
 soretedData();

}


function showData(products) {
  let productHTML = '';

  products.forEach(product => {
    
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
    
  });
  

  return productHTML;
  
}


function showProductCategories(cats) {
  
  let productCategory ='';

   cats.forEach(cat => {
     
    productCategory = productCategory + `<li class="item"> <a href="" >${cat}</a></li>`;

   });

 return productCategory;
}


function showProductsBrands(brands) {

  // console.log(brands);

  let productBrands ='';

   brands.forEach(brand => {
     
    productBrands = productBrands + `<li class="item"> <a href="" >${brand}</a></li>`;

   });
  
 return productBrands;
}

listView.addEventListener('click', function() {
  
  // console.log(productList);
  productList.classList.toggle('listview');
  var viewIcon = document.querySelector('.js-view-icon');
  viewIcon.classList.toggle('fa-th');
  viewIcon.classList.toggle('fa-list');
  });

function eventbind() {

  var currentTxt = '';

  document.querySelectorAll('.item').forEach(item => {

    item.children[0].addEventListener('click',function(ele){
        ele.preventDefault();

        currentTxt = this.textContent;
        filterByCategory(currentTxt);
    })


  });
 

}

  function filterByCategory(currentCategory) {

    console.log('current category: ', currentCategory);

    let filteredProducts = AllProducts.filter(item => item.category === currentCategory ? item: null)
    console.log(filteredProducts);
   
    let productHTML = showData(filteredProducts);
    productList.innerHTML = productHTML;
  }

 

  function soretedData() {

    var currentData = '';
  
    document.querySelectorAll('.sortprice').forEach(item => {
  
      item.addEventListener('click',function(ele){
          ele.preventDefault();
  
          currentData = this.textContent;
          sortByPrice(currentData);
      })
  
  
    });
   
  
  }

  function sortByPrice(parVal) {

    let result;

    if(parVal === 'high'){
      result = AllProducts.sort((a,b) => {

        
        return console.log( b.price - a.price);  
      });
    }
    else{
      result = AllProducts.sort((a,b)=>{
        return a.price - b.price  
         
      });
      let productHTML = showData(result);
    productList.innerHTML = productHTML;
    }
    
  }


const accordion = document.getElementsByClassName('acc-container');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active');
  })
}










 
