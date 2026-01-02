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


class ShoppingCart {
  // a class is template that keeps two things together. Data = the information an object has. Method = the actions an object can do.
  #items; // a property named #items was declared within the class. # makes private class field. it can only be accessed or modified from inside the ShoppingCart class itself, not from outside code.
  constructor() {
    //the constructor runs automatically every time you create a new object from the class. Its job is to set up the object—like preparing everything it needs before it can be used.
    /* Every time you create a new ShoppingCart, it starts with
    #items = []
    So each cart begins fresh, empty array ([]). with no items inside.
   */
    this.#items = []; // This sets the #items property of the newly created object to an empty array ([]), ensuring every new cart starts with no items
  }
  viewCart() {
    // a method was defined to perform an action in order to display contents. IT HAS ACCESS to private #items array and prints each item to the console
    for (const item of this.#items) {
      //iterating over the elements of an object. you get the item's value. Because viewCart only needs to display the items, not know their position. "For every item of the array #items, do something."
      console.log(item);
    }
  }
  addItem(name, price, quantity) {
    //ITERATE AND CHECK: Try to find the item first.
    for (const item of this.#items) {
      if (name === item.name) {
        // if the item (name) already exists in the cart,
        item.quantity++; // increase the quantity AND,
        return; // exit immediately. return stops the function.
      }

      // If the code reaches here, it means the loop
      // finished without finding the item (because `return` wasn't hit). IF THE ITEM WASNT FOUND
    }
    const id = new Date().getMilliseconds(); // add NEW Date() object
    this.#items.push({ id, name, price, quantity }); // we added a new item as an object to add #items
  }
  removeItem(name) {
    for (let i = 0; i < this.#items.length; i++) { // start index based loop that iterates through every element in #items array. why for loop? because we want index based loop to remove items based on their location with splice.
      const currentElement = this.#items[i]; // get the current element in the loop. and assign it to a variable.
      if(name.toLowerCase() === currentElement.name.toLowerCase()){ // check if the name passed into the function matches the name property of the current item
        this.#items.splice(i, 1); // match found, remove the item from #items array. splice(startIndex, deleteCount). it removes 1 element starting at the current i index. (the location of the found item).
        return; //exit the function once we find the item.
      }
    }
  }
  getTotal(){
  let total = 0; // Create a local variable total and start it at 0
  for(let i = 0; i < this.#items.length; i++){ //the loop visits every element in this.#items once.
    total += this.#items[i].quantity * this.#items[i].price
    //this.#items[i].quantity is how many units of that item.
    //this.#items[i].price is the unit price.
    //Multiply them to get the cost for that item (quantity * price).
    
  }
  return total
  }
  applyDiscount(code){
    
  const discounts = {
    SAVE10: 0.10,
    SAVE20: 0.20
  }
  if(!discounts[code]){ // discounts[code] checks if the code exists in the object.
    return "Invalid discount code"
  } else{
    let total = this.getTotal(); //this.getTotal() uses method to calculate the cart total.
    let discount = total * discounts[code]; // to see how much money is reduced. total * discounts[code]
    let price = total - discount; // substract discount from total.
    return price // return final price.

  }
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