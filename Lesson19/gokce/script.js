






class ShoppingCart {
  #items;
  constructor() {
    this.#items = [];
  }
  viewCart() {
    console.log("Viewing cart....");
    if (this.#items.length === 0) {
      console.log("The cart is empty.");
      return;
    }
    for (const item of this.#items) {
      //console yazdırırken direk template literal kullanıp içine item yazamıyorsun çünkü item bir nesne o yüzden özelliklerine tek tek erişmen lazım)
      console.log(
        `> ${item.name} | Miktar: ${item.quantity} | Fiyat: ${item.price} | ID: ${item.id}`,
      );
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
  removeItem(id) {
    console.log("Removing item from the cart...");
    const itemtoRemove = this.#items.find((item) => item.id === id);
    if (!itemtoRemove) {
      console.log("There is no item with this id");
      this.viewCart();
      return;
    }
    itemtoRemove.quantity--; //find methoduyla istediğimiz özellikteki objectin kendisini(adresni) bulduk
    if (itemtoRemove.quantity > 1) {
      console.log(
        `Quantity reduced: ID ${itemtoRemove.id} | ${itemtoRemove.name} miktarı 1 azaltıldı. Yeni miktar: ${itemtoRemove.quantity}`,
      );
    } else {
      console.log(
        `Item removed: ID ${itemtoRemove.id} | ${itemtoRemove.name} sepetten çıkarıldı.`,
      );
      this.#items = this.#items.filter((item) => item.id !== id); //filter methodunda id si eşleşmeyenleri yani silinmeyenleri diiznin yeni haline aktar.
      this.viewCart();
    }
  }
  getTotal() {
    let total = 0;
    for (const item of this.#items) {
      total += item.price * item.quantity;
    }
    console.log(`The total price is ${total}`);
    return total;
  }
  applyDiscount(discountCode) {
    const discountAmount = [
      { code: "SAVE10", discount: 0.1 },
      { code: "SAVE20", discount: 0.2 },
      { code: "SAVE30", discount: 0.3 },
      { code: "SAVE50", discount: 0.5 },
    ];
    const checkDiscount = discountAmount.find(
      (item) => item.code === discountCode,
    );

    if (!checkDiscount) {
      console.warn(`Please log valid discount code`);
      return this.getTotal();
    } else {
      const discountCalc = Math.floor(this.getTotal() * checkDiscount.discount);
      const lastPrice = this.getTotal() - discountCalc;
      console.log(
        `After applying discount code ${discountCode}, the total price is ${lastPrice}`,
      );
      return lastPrice;
    }
  }
}
const myCart = new ShoppingCart();
myCart.addItem("Apple", 1.0, 3);
myCart.addItem("Banana", 0.5, 5);
myCart.addItem("Orange", 0.8, 2);
myCart.viewCart();
myCart.removeItem(123); // Assuming 123 is the id of an item in the cart
myCart.addItem("Apple", 1.0, 2); // This should increase the quantity of Apple
myCart.viewCart();
myCart.removeItem(979);
myCart.getTotal();
myCart.applyDiscount("SAVE20");
myCart.applyDiscount("SAVE50");
myCart.applyDiscount("INVALIDCODE");
