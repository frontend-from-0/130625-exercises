const products = {
  apples: {
    quantity: 1,
    price: 3,
  },
  bananas: {
    quantity: 1,
    price: 5,
  },
  bread: {
    quantity: 1,
    price: 5,
  },
  eggs: {
    quantity: 1,
    price: 5,
  },
};

let totalPrice = 0;
document.addEventListener("DOMContentLoaded", () => {
  for (let product in products) {
    const productQuantity = document.getElementById(`${product}_quantity`);
    productQuantity.textContent = products[product].quantity;
    totalPrice += products[product].quantity * products[product].price;
    // products is object.
    // product is variable. since it is a variable, you must use square brackets . it allows us to access the value of the object with that key.
    // we used key to get the right element from html ${product}_quantity
    // then we used that element and updated its text content productQuantity.textContent
    // by getting the information from the products object. we accessed the right property from the object using bracket notation and passing the key as a variable
    //  productQuantity.textContent = products[product].quantity
    // why []? if you want to write key name as a variable, you must use bracket notation. or if you use a variable as a key name, you must use bracket notation.
    const addToCartButton = document.getElementById(`${product}_add`); // we added event listener for every button product
    addToCartButton.addEventListener("click", () =>
      addToCart(product, productQuantity) 
         
    );
    const removeProduct = document.getElementById(`${product}_remove`);
    removeProduct.addEventListener("click", () => {
      removeFromCart(product);
    });
    //
     const decrementButton = document.getElementById(`${product}_decrement`);
     decrementButton.addEventListener('click', ()=> decrement(product, productQuantity) 

     )
     const incrementButton = document.getElementById(`${product}_increment`);
     incrementButton.addEventListener('click', ()=>{
      increment(product,productQuantity)
     })


     //
    
     //
  }
   

  document.getElementById("total_price").textContent = totalPrice;

 
 
 /* const clearCartButton = document.getElementById('clear-cart')
  if(clearCartButton){
    clearCartButton.addEventListener('click', clearCart)

  }
  document.getElementById("total_price").textContent = totalPrice;

  */

  const clearCartButton = document.getElementById('clear-cart');
  if (clearCartButton) {
      clearCartButton.addEventListener('click', clearCart);
  }

  document.getElementById("total_price").textContent = totalPrice;
});
//



     

//
// when we cant reach certain things, we can pass parameters.
function addToCart(product, productQuantity) {
  products[product].quantity++; // product quantity is html element. when we click add to cart, one product is added. so we say quantity+ 1. total price is the price of +1 product. fiyat neyse o fiyattan arttırıyoruz. onemli olan bir parçanın fiyatını ekliyoruz. daha önceki parçaların fıyatı gerekmiyor
  productQuantity.textContent = products[product].quantity;
  totalPrice += products[product].price; // total price is the price of +1 product.
  document.getElementById("total_price").textContent = totalPrice;
  document.getElementById(`${product}_cart`).classList.remove('hidden')

}

//when user clicks add to cart, the quantities inside the object change. and the quantities we see on the interface change as well. the quantities on the screen comes from the object.

// remove button

function removeFromCart(product) {
  totalPrice -= products[product].quantity * products[product].price;

  products[product].quantity = 0;

  document.getElementById(`${product}_quantity`).textContent = 0;


  document.getElementById("total_price").textContent = totalPrice;
  document.getElementById(`${product}_cart`).classList.add("hidden"); 
}

function decrement(product, productQuantity) {
  console.log("you have clicked decrement button");

  if (products[product].quantity > 1) {
    products[product].quantity--;
    productQuantity.textContent = products[product].quantity;
    totalPrice -= products[product].price;
    document.getElementById("total_price").textContent = totalPrice;
  } else {
    removeFromCart(product);
  }
}

// 1- increase the quantity of each PRODUCT in the products object by one.
// 2- set the productQuantity's textContent to the quantity of the each PRODUCT in the products object. 
// 3- now update the totalPrice to the price of the each PRODUCT in the products object
function increment(product, productQuantity) {
  products[product].quantity++;
  productQuantity.textContent = products[product].quantity;
  totalPrice += products[product].price;
  document.getElementById("total_price").textContent = totalPrice;
}


function clearCart() {
  totalPrice = 0;
  document.getElementById("total_price").textContent = 0;
  for (let eachProduct in products) {
    products[eachProduct].quantity = 0;
    const quantityElement = document.getElementById(`${eachProduct}_quantity`);
    if (quantityElement) {
      quantityElement.textContent = 0;

      const cartItem = document.getElementById(`${eachProduct}_cart`);
      if (cartItem) {
        cartItem.classList.add("hidden");
      }
    }
  }
}


/*
What to do:
1. Add missing functionality for increment/decrement buttons
2. Add missing functionality for clear cart button
*/


