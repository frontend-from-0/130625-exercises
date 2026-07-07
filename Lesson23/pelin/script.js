const products = {
  apples: {
    quantity: 0,
    price: 3,
  },
  bananas: {
    quantity: 0,
    price: 1,
  },
  bread: {
    quantity: 0,
    price: 3,
  },
  eggs: {
    quantity: 0,
    price: 5,
  },
};
let totalPrice = 0;

document.addEventListener("DOMContentLoaded", () => {
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    const parsedProducts = JSON.parse(storedCart);

    for (let product in products) {
      products[product].quantity = parsedProducts?.[product]?.quantity ?? 0;
    }
  }

  for (let product in products) {
    const productQuantity = document.getElementById(`${product}_quantity`);
    productQuantity.textContent = products[product].quantity;
    totalPrice += products[product].quantity * products[product].price;
    const addToCartButton = document.getElementById(`${product}_add`);
    addToCartButton.addEventListener("click", () =>
      addToCart(product, productQuantity)
    );
    const removeProduct = document.getElementById(`${product}_remove`);
    removeProduct.addEventListener("click", () => removeFromCart(product));

    const decrementButton = document.getElementById(`${product}_decrement`);
    decrementButton.addEventListener("click", () =>
      decrement(product, productQuantity)
    );

    const incrementButton = document.getElementById(`${product}_increment`);
    incrementButton.addEventListener("click", () =>
      increment(product, productQuantity)
    );
    const cartRow = document.getElementById(`${product}_cart`);
    if (cartRow) {
      if (products[product].quantity > 0) cartRow.classList.remove("hidden");
      else cartRow.classList.add("hidden");
    }
  }

  document.getElementById("total_price").textContent = totalPrice;

  const clearCartButton = document.getElementById("clear_cart");
  clearCartButton.addEventListener("click", clearCart);
});

function addToCart(product, productQuantity) {
  console.log("Clicked add to cart button.");
  products[product].quantity++;
  productQuantity.textContent = products[product].quantity;
  totalPrice += products[product].price;
  document.getElementById("total_price").textContent = totalPrice;

  document.getElementById(`${product}_cart`).classList.remove("hidden");
  saveCartToStorage();
}

function removeFromCart(product) {
  console.log("Clicked remove to cart button.");
  totalPrice -= products[product].quantity * products[product].price;
  products[product].quantity = 0;
  const productQuantity = document.getElementById(`${product}_quantity`);
  if (productQuantity) productQuantity.textContent = 0;
  document.getElementById("total_price").textContent = totalPrice;
  document.getElementById(`${product}_cart`).classList.add("hidden");
  saveCartToStorage();
}

function decrement(product, productQuantity) {
  if (products[product].quantity > 1) {
    products[product].quantity--;
    productQuantity.textContent = products[product].quantity;
    totalPrice -= products[product].price;
    document.getElementById("total_price").textContent = totalPrice;
    saveCartToStorage();
  } else {
    removeFromCart(product);
  }
}

function increment(product, productQuantity) {
  products[product].quantity++;
  productQuantity.textContent = products[product].quantity;
  totalPrice += products[product].price;
  document.getElementById("total_price").textContent = totalPrice;
  saveCartToStorage();
}

function clearCart() {
  for (let product in products) {
    if (products[product].quantity > 0) {
      removeFromCart(product);
    }
  }
  localStorage.removeItem("cart");
}

function saveCartToStorage() {
  localStorage.setItem("cart", JSON.stringify(products));
}
