const defaultProducts = {
  apples: { quantity: 1, price: 1 },
  bananas: { quantity: 2, price: 5 },
  bread: { quantity: 1, price: 5 },
  eggs: { quantity: 1, price: 5 },
};

let products = JSON.parse(localStorage.getItem('shoppingCart')) || JSON.parse(JSON.stringify(defaultProducts));
let totalPrice = 0;

document.addEventListener('DOMContentLoaded', () => {
  updateUI();
  for (let product in products) {
    const addToCartButton = document.getElementById(`${product}_add`);
    const removeProduct = document.getElementById(`${product}_remove`);
    const incrementButton = document.getElementById(`${product}_increment`);
    const decrementButton = document.getElementById(`${product}_decrement`);

    if (addToCartButton) {
      addToCartButton.addEventListener('click', () => addToCart(product));
    }

    if (removeProduct) removeProduct.addEventListener('click', () => removeFromCart(product));
    if (incrementButton) incrementButton.addEventListener('click', () => increment(product));
    if (decrementButton) decrementButton.addEventListener('click', () => decrement(product));
  }

  const clearCartButton = document.getElementById('clear_cart');
  if (clearCartButton) {
    clearCartButton.addEventListener('click', clearCart);
  }
});

function updateUI() {
  totalPrice = 0;
  
  for (let product in products) {
    const productQuantityEl = document.getElementById(`${product}_quantity`);
    const cartItemEl = document.getElementById(`${product}_cart`);
    
    if (productQuantityEl && cartItemEl) {
      const qty = products[product].quantity;
      productQuantityEl.textContent = qty;
      
      if (qty > 0) {
        cartItemEl.classList.remove('hidden');
        totalPrice += qty * products[product].price;
      } else {
        cartItemEl.classList.add('hidden');
      }
    }
  }
  
  document.getElementById('total_price').textContent = totalPrice;
  saveCart();
}

function saveCart() {
  localStorage.setItem('shoppingCart', JSON.stringify(products));
}

function addToCart(product) {
  products[product].quantity++;
  updateUI();
}

function increment(product) {
  addToCart(product);
}

function decrement(product) {
  if (products[product].quantity > 0) {
    products[product].quantity--;
    updateUI();
  }
}

function removeFromCart(product) {
  products[product].quantity = 0;
  updateUI();
}

function clearCart() {
  for (let product in products) {
    products[product].quantity = 0;
  }
  updateUI();
}