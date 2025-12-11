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

document.addEventListener("DOMContentLoaded", () => {
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
  }

  document.getElementById("total_price").textContent = totalPrice;

  const clearCartButton = document.getElementById("clearcart");
  clearCartButton.addEventListener("click", () => clear());
});

function addToCart(product, productQuantity) {
  console.log(document.getElementById(`${product}_quantity`));
  console.log("Clicked add to cart button.");
  products[product].quantity++;
  productQuantity.textContent = products[product].quantity;
  totalPrice += products[product].price;
  document.getElementById("total_price").textContent = totalPrice;

  document.getElementById(`${product}_cart`).classList.remove("hidden");
  document.getElementById("emptycart").classList.add("hidden");
  document.getElementById(`${product}_maxlimit`).classList.add("hidden");
}

function removeFromCart(product) {
  console.log("Clicked remove to cart button.");
  totalPrice -= products[product].quantity * products[product].price;
  products[product].quantity = 0;
  document.getElementById("total_price").textContent = totalPrice;
  document.getElementById(`${product}_cart`).classList.add("hidden");
  if(totalPrice===0) {
    document.getElementById("emptycart").classList.remove("hidden");
    document.getElementById("cart_total").classList.add("hidden");
  }
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
}

function increment(product, productQuantity) {
  if (products[product].quantity < 10) {
    products[product].quantity++;
    productQuantity.textContent = products[product].quantity;
    totalPrice += products[product].price;
    document.getElementById("total_price").textContent = totalPrice;
  } else {
    document.getElementById(`${product}_maxlimit`).classList.remove("hidden");
    incrementButton.removeEventListener("click", () =>
      increment(product, productQuantity)
    );
  }
}

function clear() {
  for (let product in products) {
    products[product].quantity = 0;
    totalPrice = products[product].quantity * products[product].price;
    document.getElementById(`${product}_cart`).classList.add("hidden");
  }
  document.getElementById("cart_total").classList.add("hidden");
  document.getElementById("emptycart").classList.remove("hidden");
}


// I looked into localStorage and tried to use it in the assignment. It was a bit complicated for me to implement but it was helpful for me to become familiar with the concept.

