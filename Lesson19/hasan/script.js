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
  addItem(name, price, quantity) {
    console.log("Adding new item to the cart...");
    for (const item of this.#items) {
      if (name === item.name) {
        console.log("increase the quantity.");
        item.quantity += quantity;
        return;
      }
    }

    const id = new Date().getMilliseconds();
    this.#items.push({ id, name, price, quantity });
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

  /*
-----------------------------------------------------------
  STEP 4: Calculate the Total Cost
-----------------------------------------------------------
1. Add a `getTotal` method to the `ShoppingCart` class.
2. The method should:
   - Calculate and return the total cost of all items in 
     the cart.
*/
  getTotal() {
    return this.#items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
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

  applyDiscount(code) {
    const discountCodes = {
      SAVE10: 0.1,
      SAVE20: 0.2,
    };
    const discountRate = discountCodes[code.toUpperCase()];
    if (discountRate === undefined) {
      console.log(
        "Undefined Code. Please conrol your code and try with correct code again or can pay this price...",
      );
      return this.getTotal();
    }

    const total = this.getTotal();
    const finalPrice = total - total * discountRate;
    return Number(finalPrice.toFixed(2));
  }
}

const myCart = new ShoppingCart();
myCart.viewCart();

myCart.addItem("Shoes", 100, 1);
myCart.addItem("Dress", 70, 1);
myCart.addItem("Ball", 50, 2);
myCart.addItem("Cap", 30, 3);
myCart.addItem("Jersey", 150, 1);
myCart.viewCart();

myCart.removeItem("Dress");

myCart.viewCart();
const originalTotal = myCart.getTotal();
console.log(`First Amount:  ${originalTotal} TRY`);
console.log("*******");
const finalCost10 = myCart.applyDiscount("SAVE10");
console.log("%10 Discounted cost: ", finalCost10, "TRY");
console.log("---------------------");
const finalCost20 = myCart.applyDiscount("SAVE20");
console.log("%20 Discounted cost: ", finalCost20, "TRY");
console.log("---------------------");
const finalCost30 = myCart.applyDiscount("SAVE30");
console.log("%30 Discounted cost: ", finalCost30, "TRY");
