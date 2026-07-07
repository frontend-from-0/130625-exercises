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

/*
-----------------------------------------------------------
  STEP 3: Remove Items from the Cart
-----------------------------------------------------------
1. Add a `removeItem` method to the `ShoppingCart` class.
2. The method should:
   - Accept the `name` of the item to remove.
   - Remove the item from the `#items` array if it exists.
*/

/*
-----------------------------------------------------------
  STEP 4: Calculate the Total Cost
-----------------------------------------------------------
1. Add a `getTotal` method to the `ShoppingCart` class.
2. The method should:
   - Calculate and return the total cost of all items in 
     the cart.
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
    console.log("Adding new item on the cart...");
    for (const item of this.#items) {
      if (name === item.name) {
        console.log("increase the quantity.");
        item.quantity++;
        return;
      }
    }
    this.#items.push({ name, price, quantity });
  }

  removeItem(name) {
    console.log("Removing items on the cart...");
    for (let i = 0; i < this.#items.length; i++) {
      if (name.toLowerCase() === this.#items[i].name.toLowerCase()) {
        this.#items.splice(i, 1);
        return;
      }
    }
  }

  getTotal() {
    console.log("Total cost of all items...");
    let count = 0;
    for (let i = 0; i < this.#items.length; i++) {
      count += this.#items[i].price.amount * this.#items[i].quantity;
    }
    return count;
  }

  applyDiscount(discount) {
    const discountObj = {
      Save10: 10,
      Save30: 30,
    };
    let count = this.getTotal();
    if (discountObj[discount]) {
      let halfCount = (count / 100) * discountObj[discount];
      return count - halfCount;
      console.log(count);
    }
    return `Discount code ${discount} not found.`;
  }
}

const myCart = new ShoppingCart();

console.log(myCart.viewCart());
myCart.addItem("Shoes", { amount: 100, currency: "TRY" }, 1);
myCart.addItem("Dress", { amount: 70, currency: "TRY" }, 1);
myCart.addItem("Hat", { amount: 50, currency: "TRY" }, 4);
console.log("---------");
myCart.viewCart();
myCart.removeItem("Dress");
console.log("---------");
myCart.viewCart();
console.log(myCart.getTotal());
console.log("---------");
myCart.viewCart();
console.log(myCart.applyDiscount("Save30"));
console.log(myCart.applyDiscount("Save50"));
