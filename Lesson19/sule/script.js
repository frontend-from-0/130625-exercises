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

const DISCOUNTS = {
  SAVE10: 0.10,
  SAVE20: 0.20,
};

class ShoppingCart {
  #items;

  constructor() {
    this.#items = [];
  }

  // Displays all items currently in the shopping cart 
    viewCart() {
  console.log('Viewing cart....');

  if (this.#items.length === 0) {
    console.log('The cart is empty.');
    return;
  }

  for (const item of this.#items) {
    console.log(
      `- ${item.name} | qty: ${item.quantity} | ${item.price.amount} ${item.price.currency}`
    );
  }

    console.log(`Subtotal: ${this.getTotal()} ${this.#items[0].price.currency}`);
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

  // Adds a new item to the cart or increases quantity if it already exists
     addItem(name, price, quantity) {
    console.log('Adding new item to the cart...');
    for (const item of this.#items) {
      if (name === item.name) {
        console.log('increase the quantity.');
        item.quantity += quantity;
        return;
      }
    }

    const id = Date.now();
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
  let found = false;

  for (let i = 0; i < this.#items.length; i++) {
    const currentElement = this.#items[i];

    if (name.toLowerCase() === currentElement.name.toLowerCase()) {
      this.#items.splice(i, 1);
      found = true;
      break;
    }
  }

  if (!found) {
    console.log(`Item "${name}" not found in the cart.`);
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

// Calculates and returns the total cost of items in the cart
   getTotal(){
    let total=0;
    for (const item of this.#items){
        total = total + ( item.price.amount * item.quantity );
    }

    return total;
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

// Applies a discount code to the total price if the code is valid
   applyDiscount(code) {
  const total = this.getTotal();
  const cleanCode = code.toUpperCase();
  const discountRate = DISCOUNTS[cleanCode];

  if (discountRate) {
    return total - total * discountRate;
  }

  return total;
}
}

// ===============================
// TESTS
// ===============================

const myCart = new ShoppingCart();

// ---------- STEP 1 TEST: viewCart on empty cart ----------
console.log('--- STEP 1 TEST ---');
myCart.viewCart();

// ---------- STEP 2 TEST: addItem + viewCart ----------
console.log('--- STEP 2 TEST ---');
myCart.addItem('Shoes', { amount: 100, currency: 'TRY' }, 1);
myCart.addItem('Dress', { amount: 70, currency: 'TRY' }, 1);
myCart.viewCart();

// ---------- STEP 3 TEST: removeItem + viewCart ----------
console.log('--- STEP 3 TEST ---');
myCart.removeItem('Dress');
myCart.viewCart();

// ---------- STEP 4 TEST: getTotal ----------
console.log('--- STEP 4 TEST ---');

myCart.addItem('Dress', { amount: 70, currency: 'TRY' }, 1);
console.log('Total after adding items (expected 170):', myCart.getTotal());
myCart.removeItem('Dress');
console.log('Total after removing Dress (expected 100):', myCart.getTotal());

// Prepare cart for Step 5 (make total 170 again)
myCart.addItem('Dress', { amount: 70, currency: 'TRY' }, 1);

// ---------- STEP 5 TEST: applyDiscount ----------
console.log('--- STEP 5 TEST ---');
console.log('Total with SAVE10 (expected 153):', myCart.applyDiscount('SAVE10'));
console.log('Total with SAVE20 (expected 136):', myCart.applyDiscount('SAVE20'));
console.log('Total with INVALID code (expected 170):', myCart.applyDiscount('INVALID'));
