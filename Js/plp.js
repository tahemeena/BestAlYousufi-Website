var AllProducts = [];
var results = 0;
var productList = document.querySelector('.product-list');
var productDetails = document.querySelector('.product-details');
var categoryList = document.querySelector('.list');
var brandList = document.querySelector('.brand-list');
var listView = document.querySelector('.btn-listview');
var totalproducts = document.querySelector('.total-products');
var productCard = document.querySelector('.product-card');
var loginPage = document.querySelector('.login-page');
var outofstock = document.querySelector('.outofstock-btn');

// function showLogin() {
//   loginPage.style.display = 'block';

// }

function showProductListing() {

}

//login page

// function userLogin() {
//   fetch('https://dummyjson.com/auth/login', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({

//       username: 'kminchelle',
//       password: '0lelplR',

//     })
//   })
//     .then(res => res.json())
//     .then(result => {

//       loginPage.style.display = 'none';
//       productCard.style.display = 'block'

//       JsonData();


//     });


// }



async function fetchDataJSON() {
  const response = await fetch('https://dummyjson.com/products');
  const dummydata = await response.json();
  return dummydata;
}

function JsonData() {

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

}

JsonData();

function showTotalcount(data) {
  return data.products.length;
}


function showCategories(products) {

  let categories = [];
  let brands = [];

  products.forEach(product => {

    if (!categories.includes(product.category)) {
      categories.push(product.category);
    }

    if (!brands.includes(product.brand)) {
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

    productHTML = productHTML + `
      
      <div class="product-info">
      <div class="product-img"><img src="${product.thumbnail}" /></div>
      <div class="product-content">
      <div class="out-of-stock"><button class="outofstock-btn">OUT OF STOCK</button></div>
      <div class="product-brand">${product.brand}</div>
      <div class="product-title">${product.title}</div>
      <div class="product-price price-color"> Price: $${product.price}</div>
      <div class="product-discount"> Discount: ${product.discountPercentage}%</div>
      <div class="product-category">${product.category}</div>
      
      <div class="btns"><button class="btn add-btn-cart">Add to cart</button></div>
      </div>

            
      </div>

      `
  });
  return productHTML;
}


function showProductCategories(cats) {

  let productCategory = '';

  cats.forEach(cat => {

    productCategory = productCategory + `<li class="item"> <a href="" > <input type="checkbox" >${cat}</a></li>`;

  });
  console.log(productCategory);
  return productCategory;
}


function showProductsBrands(brands) {

  // console.log(brands);

  let productBrands = '';

  brands.forEach(brand => {

    productBrands = productBrands + `<li class="item"> <a href="" > <input type="checkbox" >${brand}</a></li>`;

  });

  return productBrands;
}

listView.addEventListener('click', function () {

  // console.log(productList);
  productList.classList.toggle('listview');
  var viewIcon = document.querySelector('.js-view-icon');
  viewIcon.classList.toggle('fa-th');
  viewIcon.classList.toggle('fa-list');
});

function eventbind() {

  var currentTxt = '';

  document.querySelectorAll('.item').forEach(item => {

    item.children[0].addEventListener('click', function (ele) {
      ele.preventDefault();

      currentTxt = this.textContent;
      filterByCategory(currentTxt);
    })


  });


}

function filterByCategory(currentCategory) {

  console.log('current category: ', currentCategory);

  let filteredProducts = AllProducts.filter(item => item.category === currentCategory ? item : null)
  console.log(filteredProducts);

  let productHTML = showData(filteredProducts);
  productList.innerHTML = productHTML;
}



function soretedData() {

  var currentData = '';

  document.querySelectorAll('.sortprice').forEach(item => {

    item.addEventListener('click', function (ele) {
      ele.preventDefault();

      currentData = this.textContent;
      sortByPrice(currentData);
    })


  });


}

// Price sliderbar 

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
}

// End sliderbar


// User Rating

const starRatingForm = document.querySelector(".star-rating")

const handleFormChange = (e) => {
  console.log(e.target.value)
  return e.target.value
}

starRatingForm.addEventListener("change", handleFormChange)



//end user rating
function sortByPrice(parVal) {

  let result;

  if (parVal === 'high') {
    result = AllProducts.sort((a, b) => {


      return console.log(b.price - a.price);
    });
  }
  else {
    result = AllProducts.sort((a, b) => {
      return a.price - b.price

    });
    let productHTML = showData(result);
    productList.innerHTML = productHTML;
  }

}


// const accordion = document.getElementsByClassName('acc-container');

// for (i = 0; i < accordion.length; i++) {
//   accordion[i].addEventListener('click', function () {
//     this.classList.toggle('active');
//   })
// }





// initialize


window.onload = function () {

  // hide both login and productlisting section

  productCard.style.display = 'block';
  // loginPage.style.display = 'none';

  // showLogin();

  // var btnLogin = document.querySelector('.btn-login');

  // btnLogin.addEventListener('click', function (e) {
  //   e.preventDefault();
  //   userLogin();

  // })

}




// Add to cart functionality

const btnCart = document.querySelector('.mycart');
const cart = document.querySelector('.cart');
const btnClose = document.querySelector('#cart-close');

btnCart.addEventListener('click', () => {
  console.log(btnCart);
  cart.classList.add('cart-active');
});

btnClose.addEventListener('click', () => {
  cart.classList.remove('cart-active');
});

document.addEventListener('DOMContentLoaded', loadProduct);

function loadProduct() {
  loadContent();

}


function createCartProduct() {

  return `
  <div class="product-info">
      <div class="product-img"><img src="${product.thumbnail}" /></div>
      <div class="product-content">
      <div class="out-of-stock"><button class="outofstock-btn">OUT OF STOCK</button></div>
      <div class="product-brand">${product.brand}</div>
      <div class="product-title">${product.title}</div>
      <div class="product-price price-color"> Price: ${product.price}</div>
      <div class="product-discount"> Discount: ${product.discountPercentage}%</div>
      <div class="product-category">${product.category}</div>
     

      </div>

            
      </div>

 
    <input type="number" value="1" class="cart-quantity">
  </div>
  <ion-icon name="trash" class="cart-remove"></ion-icon>
  `;
}

function loadContent() {
  //Remove product Items  From Cart
  // let btnRemove=document.querySelectorAll('.cart-remove');
  // btnRemove.forEach((btn)=>{
  //   btn.addEventListener('click',removeItem);
  // });

  //Product Item Change Event
  // let qtyElements=document.querySelectorAll('.cart-quantity');
  // qtyElements.forEach((input)=>{
  //   input.addEventListener('change',changeQty);
  // });

  //Product Cart

  let cartBtns = document.querySelector('.add-btn-cart');
  // console.log(cartBtns);
  cartBtns.forEach((btn) => {
    btn.addEventListener('click', addCart);
    console.log(btn);
  });

  updateTotal();
}


// //Remove Item
// function removeItem(){
//   if(confirm('Are Your Sure to Remove')){
//     let title=this.parentElement.querySelector('.cart-product-title').innerHTML;
//     itemList=itemList.filter(el=>el.title!=title);
//     this.parentElement.remove();
//     loadContent();
//   }
// }

// //Change Quantity
// function changeQty() {
//   if (isNaN(this.value) || this.value < 1) {
//     this.value = 1;
//   }
//   loadContent();
// }

let itemList = [];

// //Add Cart
function addCart() {
  let product = this.parentElement;

  let title = product.querySelector('.product-name').innerHTML;
  let price = product.querySelector('.selling-price').innerHTML;
  let imgSrc = product.querySelector('.product-card-img').src;
  console.log(title, price, imgSrc);

  let newProduct = { title, price, imgSrc }

  //Check Product already Exist in Cart
  if (itemList.find((el) => el.title == newProduct.title)) {
    alert("Product Already added in Cart");
    return;
  } else {
    itemList.push(newProduct);
  }


  let newProductElement = createCartProduct(title, price, imgSrc);
  let element = document.createElement('div');
  element.innerHTML = newProductElement;
  let cartBasket = document.querySelector('.cart-content');
  cartBasket.append(element);
  loadContent();
}




function updateTotal() {
  const cartItems = document.querySelectorAll('.product-info');
  const totalValue = document.querySelector('.total-price');

  let total = 0;

  cartItems.forEach(product => {
    let priceElement = product.querySelector('.product-price');
    let price = parseFloat(priceElement.innerHTML.replace("Rs.", ""));
    let qty = product.querySelector('.cart-quantity').value;
    total += (price * qty);
    product.querySelector('.cart-amt').innerText = "Rs." + (price * qty);

  });

  totalValue.innerHTML = 'Rs.' + total;


  //   // Add Product Count in Cart Icon

  const cartCount = document.querySelector('.cart-count');
  let count = itemList.length;

  console.log(count);
  cartCount.innerHTML = count;

  if (count == 0) {
    cartCount.style.display = 'none';
  } else {
    cartCount.style.display = 'block';
  }


}




