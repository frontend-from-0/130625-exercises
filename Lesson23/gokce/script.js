let products = {
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

document.addEventListener("DOMContentLoaded", () => {
  const storedData = localStorage.getItem("cartData");
  if (storedData) {
    console.log("Stored Data:", storedData);
    const parsedData = JSON.parse(storedData);
    products = parsedData;
  }

  for (let product in products) {
    const productQuantity = document.getElementById(`${product}_quantity`);
    productQuantity.textContent = products[product].quantity;
    totalPrice += products[product].quantity * products[product].price;
    const addToCartButton = document.getElementById(`${product}_add`);
    if (products[product].quantity === 0) {
      document.getElementById(`${product}_cart`).classList.add("hidden");
    }
    addToCartButton.addEventListener("click", () =>
      addToCart(product, productQuantity),
    );
    const removeProduct = document.getElementById(`${product}_remove`);
    removeProduct.addEventListener("click", () => removeFromCart(product));

    const decrementButton = document.getElementById(`${product}_decrement`);
    decrementButton.addEventListener("click", () =>
      decrement(product, productQuantity),
    );
    const incrementButton = document.getElementById(`${product}_increment`);
    incrementButton.addEventListener("click", () =>
      increment(product, productQuantity),
    );
  }
  document.getElementById("total_price").textContent = totalPrice;

  const clearCartButton = document.getElementById("clear-cart");
  console.log("Clear Cart Button Elementi:", clearCartButton);
  clearCartButton.addEventListener("click", () => clearCart());
});

function clearCart() {
  console.log("Clicked clear cart button.");
  for (let product in products) {
    products[product].quantity = 0;
    document.getElementById(`${product}_quantity`).textContent =
      products[product].quantity;
    document.getElementById(`${product}_cart`).classList.add("hidden");
  }
  totalPrice = 0;
  document.getElementById("total_price").textContent = totalPrice;
  storage();
}
function addToCart(product, productQuantity) {
  console.log("Clicked add to cart button.");
  products[product].quantity++;
  productQuantity.textContent = products[product].quantity;
  totalPrice += products[product].price;
  document.getElementById("total_price").textContent = totalPrice;

  document.getElementById(`${product}_cart`).classList.remove("hidden");
  storage();
}

function removeFromCart(product) {
  console.log("Clicked remove to cart button.");
  totalPrice -= products[product].quantity * products[product].price;
  products[product].quantity = 0;
  document.getElementById("total_price").textContent = totalPrice;
  document.getElementById(`${product}_cart`).classList.add("hidden");
  storage();
}

function decrement(product, productQuantity) {
  console.log("Clicked decrement by one.");

  if (products[product].quantity > 1) {
    products[product].quantity--;
    productQuantity.textContent = products[product].quantity;
    totalPrice -= products[product].price;
    document.getElementById("total_price").textContent = totalPrice;
  } else {
    removeFromCart(product);
  }
  storage();
}

function increment(product, productQuantity) {
  console.log("Clicked increment by one.");
  products[product].quantity++;
  productQuantity.textContent = products[product].quantity;
  totalPrice += products[product].price;
  document.getElementById("total_price").textContent = totalPrice;
  storage();
}

function storage() {
  const jsonData = JSON.stringify(products);
  localStorage.setItem("cartData", jsonData);
}
