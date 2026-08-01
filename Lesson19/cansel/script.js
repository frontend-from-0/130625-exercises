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
*/

class ShoppingCart {
  // Step 1: Private array to store cart items
  #items;

  constructor() {
    this.#items = [];
  }

  // Step 1: Display all items in the cart
  viewCart() {
    console.log('\n--- Viewing Cart ---');
    if (this.#items.length === 0) {
      console.log('Your cart is empty.');
      return;
    }
    
    for (const item of this.#items) {
      // Handling the price object format { amount: 100, currency: 'TRY' }
      const priceStr = typeof item.price === 'object' ? `${item.price.amount} ${item.price.currency}` : item.price;
      console.log(`Item: ${item.name} | Price: ${priceStr} | Quantity: ${item.quantity}`);
    }
  }

  // Step 2: Add items to the cart
  addItem(name, price, quantity) {
    console.log(`\nAdding ${quantity}x "${name}" to the cart...`);
    
    for (const item of this.#items) {
      if (name.toLowerCase() === item.name.toLowerCase()) {
        console.log('Item already exists. Increasing the quantity.');
        item.quantity += quantity; // Accurately increase by the provided quantity
        return;
      }
    }

    const id = new Date().getMilliseconds();
    this.#items.push({ id, name, price, quantity });
    console.log(`Success: "${name}" added to the cart.`);
  }

  // Step 3: Remove items from the cart
  removeItem(name) {
    console.log(`\nRemoving "${name}" from the cart...`);
    
    for (let i = 0; i < this.#items.length; i++) {
      const currentElement = this.#items[i];
      if (name.toLowerCase() === currentElement.name.toLowerCase()) {
        this.#items.splice(i, 1);
        console.log(`Success: "${name}" has been removed.`);
        return;
      }
    }
    console.log(`Error: "${name}" not found in the cart.`);
  }

  // Step 4: Calculate the Total Cost
  getTotal() {
    let total = 0;
    
    for (const item of this.#items) {
      // Check if price is an object or a simple number
      const priceAmount = typeof item.price === 'object' ? item.price.amount : item.price;
      total += priceAmount * item.quantity;
    }
    
    return total;
  }

  // Step 5: Apply a Discount
  applyDiscount(code) {
    // An object storing discount codes and their percentage values
    const discountCodes = {
      'SAVE10': 0.10, // 10% discount
      'SAVE20': 0.20, // 20% discount
      'HALFPRICE': 0.50 // 50% discount
    };

    console.log(`\nApplying discount code: "${code}"`);
    const total = this.getTotal();

    if (discountCodes[code]) {
      const discountAmount = total * discountCodes[code];
      const finalTotal = total - discountAmount;
      
      console.log(`Success! ${discountCodes[code] * 100}% discount applied.`);
      console.log(`Original Total: ${total} | New Total: ${finalTotal}`);
      return finalTotal;
    } else {
      console.log('Error: Invalid discount code.');
      console.log(`Total remains: ${total}`);
      return total;
    }
  }
}