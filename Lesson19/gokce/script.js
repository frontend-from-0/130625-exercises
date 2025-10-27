/*
===========================================================
  SHOPPING CART APPLICATION
===========================================================
In this project, you'll create a simple Shopping Cart to
simulate adding items, removing items, calculating totals,
and applying discounts.

You'll practice:
1. Classes and objects
2. Encapsulation and abstraction
3. Methods (functions inside a class)
4. Arrays and basic array methods (push, filter, find)
5. Conditional statements (if-else)

Below is a step-by-step guide with comments explaining
each part. You can test each step by running the code in
Node.js or a browser console.
*/

/*
-----------------------------------------------------------
  STEP 1: Create the ShoppingCart Class
-----------------------------------------------------------
1. Define a `ShoppingCart` class.
2. Add a constructor that initializes an empty private 
   array `#items` to store the cart items.
3. Add a `viewCart` method to display all items in the cart.
*/

/*
-----------------------------------------------------------
  STEP 2: Add Items to the Cart
-----------------------------------------------------------
1. Create an `addItem` method in the `ShoppingCart` class.
2. The method should:
   - Accept `name`, `price`, and `quantity` as parameters.
   - Check if the item already exists in the cart.
     - If it exists, increase the quantity.
     - Otherwise, add the new item to the `#items` array.
*/
class ShoppingCart {
  #items;
  constructor() {
    this.#items = [];
  }

  viewCart() {
    console.log(`Viewing cart....`);
    if (this.#items.length === 0) {
      console.log(`The cart is empty`);
      return;
    }
    for (let item of this.#items) {
      console.log(`You have the following items in your cart: ${item}`);
    }
  }
  addItem(name, price, quantity) {
    if (
      typeof name !== "string" ||
      typeof price !== "number" ||
      typeof quantity !== "number"
    ) {
      console.log(
        "Invalid input types. Name should be a string, price and quantity should be numbers.",
      );
      return;
    }
    const newItem = { name, price, quantity };
    for (let item of this.#items) {
      if (name === item.name) {
        item.quantity++;
        return;
      }
    }
    this.#items.push(newItem);
    console.log(`Item added: ${name}, Price: ${price}, Quantity: ${quantity}`);
  }
}
/*
-----------------------------------------------------------
  STEP 3: Remove Items from the Cart
-----------------------------------------------------------
1. Add a `removeItem` method to the `ShoppingCart` class.
2. The method should:
   - Accept the `name` of the item to remove.
   - Remove the item from the `#items` array if it exists.
*/

class ShoppingCart {
  #items;

  constructor() {
    this.#items = [];
  }

  viewCart() {
    console.log("Viewing cart....");
    for (const item of this.#items) {
      console.log(item);
    }
  }

  addItem(name, price, quantity) {
    console.log("Adding new item to the cart...");
    for (const item of this.#items) {
      if (name === item.name) {
        console.log("increase the quantity.");
        item.quantity++;
        return;
      }
    }

    const id = new Date().getMilliseconds();
    this.#items.push({ id, name, price, quantity });
  }

  // In real life, we usually use id to find elements or do any manipulations
  removeItem(name) {
    for (let i = 0; i < this.#items.length; i++) {
      const currentElement = this.#items[i];
      if (name.toLowerCase() === currentElement.name.toLowerCase()) {
        this.#items.splice(i, 1);
        return;
      }
    }
  }
}

const myCart = new ShoppingCart();
myCart.viewCart();

myCart.addItem("Shoes", { amount: 100, currency: "TRY" }, 1);
myCart.addItem("Dress", { amount: 70, currency: "TRY" }, 1);

myCart.viewCart();

myCart.removeItem("Dress");

myCart.viewCart();

/*
-----------------------------------------------------------
  STEP 4: Calculate the Total Cost
-----------------------------------------------------------
1. Add a `getTotal` method to the `ShoppingCart` class.
2. The method should:
   - Calculate and return the total cost of all items in 
     the cart.
*/
class ShoppingCart {
  #items;
  constructor() {
    this.#items = [];
  }

  viewCart() {
    console.log(`Viewing cart....`);
    if (this.#items.length === 0) {
      console.log(`The cart is empty`);
      return;
    }
    for (let item of this.#items) {
      console.log(`You have the following items in your cart: ${item}`);
    }
  }
  addItem(name, price, quantity) {
    if (
      typeof name !== "string" ||
      typeof price !== "number" ||
      typeof quantity !== "number"
    ) {
      console.log(
        "Invalid input types. Name should be a string, price and quantity should be numbers.",
      );
      return;
    }
    const newItem = { name, price, quantity };
    for (let item of this.#items) {
      if (name === item.name) {
        item.quantity++;
        return;
      }
    }
    this.#items.push(newItem);
    console.log(`Item added: ${name}, Price: ${price}, Quantity: ${quantity}`);
  }
  getTotal() {
    let total = 0;
    for (let item of this.#items) {
      total += item.price * item.quantity;
    }
    console.log(`Total cost of items in the cart: ${total}`);
  }
}

/*
-----------------------------------------------------------
  STEP 5: Apply a Discount
-----------------------------------------------------------
1. Add an `applyDiscount` method to the `ShoppingCart` class.
2. The method should:
   - Accept a discount code (e.g., 'SAVE10', 'SAVE20').
   - Apply a percentage discount to the total cost if the 
     code is valid.
3. Use an object to store discount codes and their values.
*/
class ShoppingCart {
  #items;
  constructor() {
    this.#items = [];
  }

  viewCart() {
    console.log(`Viewing cart....`);
    if (this.#items.length === 0) {
      console.log(`The cart is empty`);
      return;
    }
    for (let item of this.#items) {
      console.log(`You have the following items in your cart: ${item}`);
    }
  }
  addItem(name, price, quantity) {
    if (
      typeof name !== "string" ||
      typeof price !== "number" ||
      typeof quantity !== "number"
    ) {
      console.log(
        "Invalid input types. Name should be a string, price and quantity should be numbers.",
      );
      return;
    }
    const newItem = { name, price, quantity };
    for (let item of this.#items) {
      if (name === item.name) {
        item.quantity++;
        return;
      }
    }
    this.#items.push(newItem);
    console.log(`Item added: ${name}, Price: ${price}, Quantity: ${quantity}`);
  }
  getTotal() {
    let total = 0;
    for (let item of this.#items) {
      total += item.price * item.quantity;
    }
    console.log(`Total cost of items in the cart: ${total}`);
  }
  applyDiscount(discountCode) {
    const discounts = {
      SAVE10: 0.1,
      SAVE20: 0.2,
      SAVE30: 0.3,
    };
    if (discounts[discountCode] === undefined) {
      console.log(`This code is not valid`);
      return;
    }
    let total = 0;
    for (let item of this.#items) {
      total += item.price * item.quantity;
    }
    const discountAmount = total * discounts[discountCode];
    let result = total - discountAmount;
    return result;
  }
}
