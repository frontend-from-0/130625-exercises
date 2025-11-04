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
const DISCOUNT_CODES = {
  save10: 0.1,
  save20: 0.2,
  free30: 0.3,
  max50: 0.5,
};

class ShoppingCart {
  #items;
  #discountValue;

  constructor() {
    this.#items = [];
    this.#discountValue = 0;
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
        item.quantity++;
        return;
      }
    }

    const id = new Date().getMilliseconds();
    this.#items.push({ id, name, price, quantity });
  }

  // In real life, we usually use id to find elements or do any manipulations
  /*
-----------------------------------------------------------
  STEP 3: Remove Items from the Cart
-----------------------------------------------------------
1. Add a `removeItem` method to the `ShoppingCart` class.
2. The method should:
   - Accept the `name` of the item to remove.
   - Remove the item from the `#items` array if it exists.
*/

  removeItem(name) {
    for (let i = 0; i < this.#items.length; i++) {
      const currentElement = this.#items[i];
      if (name.toLowerCase() === currentElement.name.toLowerCase()) {
        console.log(`Removing item with the name ${name}...`);
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

  /* This code would have been sufficient to calculate the subtotal if no discount was applied.
  
  getTotal() {
    return this.#items.reduce((accumulator, item) => {
      return accumulator + item.price.amount * item.quantity;
    }, 0);
  }
     */

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

I CREATED AN OBJECT NAMED "DISCOUNT_CODES". IT WORKED. 
BUT I WANTED TO DEVELOP IT FOR ALL KIND OF SALES THAT INCLUDES NUMBERS. 
SO I GOT HELP ABOUT THIS FROM GEMINI.
*/

  applyDiscount(code) {
    const cleanCode = code.toLowerCase();
    const discountRate = DISCOUNT_CODES[cleanCode];

    if (discountRate) {
      console.log(`Applying approved discount code: ${code}...`);
      this.#discountValue = 0;
      const total = this.getTotal();
      const discountAmount = total * discountRate;
      this.#discountValue = discountAmount;
      const percentage = discountRate * 100;
      console.log(
        `Discount applied! ${percentage}% (${discountAmount.toFixed(
          2
        )} TRY) has been saved.`
      );
    } else {
      this.#discountValue = 0;
      console.log(`Error: Invalid or unapproved discount code: ${code}`);
    }
  }
  getTotal() {
    const subTotal = this.#items.reduce((accumulator, item) => {
      return accumulator + item.price.amount * item.quantity;
    }, 0);
    const finalTotal = subTotal - this.#discountValue;
    return finalTotal < 0 ? 0 : finalTotal;
  }
}

const myCart = new ShoppingCart();
myCart.viewCart();

myCart.addItem("Shoes", { amount: 100, currency: "TRY" }, 1);
myCart.addItem("Dress", { amount: 70, currency: "TRY" }, 1);
myCart.addItem("Dress", { amount: 70, currency: "TRY" }, 1);
myCart.addItem("Sweater", { amount: 130, currency: "TRY" }, 1);
myCart.addItem("Sweater", { amount: 130, currency: "TRY" }, 1);

myCart.viewCart();

myCart.removeItem("Dress");

myCart.viewCart();

console.log("");
console.log("");
console.log(`Total amount of shopping cart is ${myCart.getTotal()} TRY`);
console.log("");
myCart.applyDiscount("SAVE10");
console.log("Final Cart Total:", myCart.getTotal(), "TRY");
console.log("");
myCart.applyDiscount("FREE30");
console.log("Final Cart Total:", myCart.getTotal(), "TRY");
console.log("");
myCart.applyDiscount("Max50");
console.log("Final Cart Total:", myCart.getTotal(), "TRY");
console.log("");
myCart.applyDiscount("DEAL110");
console.log("Final Cart Total:", myCart.getTotal(), "TRY");
