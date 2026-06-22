const products = {
  apples: {
    quantity: 1,
    price: 1,
  },
  bananas: {
    quantity: 2,
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

document.addEventListener('DOMContentLoaded', () => {
  
  const savedCart = localStorage.getItem('cartData');
  if (savedCart) {
    const parsedCart = JSON.parse(savedCart);
    for (let key in parsedCart) {
      products[key] = parsedCart[key];
    }
  }

  totalPrice = 0;
  for (let product in products) {
    const productQuantity = document.getElementById(`${product}_quantity`);
    productQuantity.textContent = products[product].quantity;
    totalPrice += products[product].quantity * products[product].price;
    
    const addToCartButton = document.getElementById(`${product}_add`);
    addToCartButton.addEventListener('click', () => addToCart(product, productQuantity));
    
    const removeProduct = document.getElementById(`${product}_remove`);
    removeProduct.addEventListener('click', () => removeFromCart(product));

    const decrementButton = document.getElementById(`${product}_decrement`);
    if (decrementButton) {
      decrementButton.addEventListener('click', () => decrement(product, productQuantity));
    }

    const incrementButton = document.getElementById(`${product}_increment`);
    if (incrementButton) {
      incrementButton.addEventListener('click', () => increment(product, productQuantity));
    }
  }

  document.getElementById('total_price').textContent = totalPrice;

  const clearCartButton = document.getElementById('clear_cart'); 
if (clearCartButton) {
  clearCartButton.addEventListener('click', clearCart);
}

});

function addToCart(product, productQuantity) {
  console.log('Clicked add to cart button.');
  products[product].quantity++;
  productQuantity.textContent = products[product].quantity;
  totalPrice += products[product].price;
  document.getElementById('total_price').textContent = totalPrice;

  document.getElementById(`${product}_cart`).classList.remove('hidden');
  saveToLocalStorage();
}

function removeFromCart(product) {
  console.log('Clicked remove to cart button.');
  totalPrice -= products[product].quantity * products[product].price;
  products[product].quantity = 0;
  document.getElementById('total_price').textContent = totalPrice;
  document.getElementById(`${product}_cart`).classList.add('hidden');
  saveToLocalStorage();
}

function decrement(product, productQuantity) {
  console.log('Clicked decrement by one.');

  if (products[product].quantity > 1) {
    products[product].quantity--;
    productQuantity.textContent = products[product].quantity;
    totalPrice -= products[product].price;
    document.getElementById('total_price').textContent = totalPrice;
  } else {
    removeFromCart(product);
  }
  saveToLocalStorage();
}

 function increment(product, productQuantity) {
  console.log('Clicked increment by one.');
  products[product].quantity++;
  productQuantity.textContent = products[product].quantity;
  totalPrice += products[product].price;
  document.getElementById('total_price').textContent = totalPrice;
  saveToLocalStorage()
}

function clearCart() {
  for (let product in products) {
    products[product].quantity = 0;
  
    const productQuantity = document.getElementById(`${product}_quantity`);
    if (productQuantity) {
      productQuantity.textContent = 0;
    }

    const cartItem = document.getElementById(`${product}_cart`);
    if (cartItem) {
      cartItem.classList.add('hidden');
    }
  }
  totalPrice = 0;
  document.getElementById('total_price').textContent = totalPrice;
  console.log('Cart cleared.');
  saveToLocalStorage();
}

function saveToLocalStorage() {
  localStorage.setItem('cartData', JSON.stringify(products));
}