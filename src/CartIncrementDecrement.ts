import { DisplayTotalAmount } from "./DisplayTotalAmount";
import { getCartProductLS } from "./getCartProductLS";

export const CartIncrementDecrement=(id:any, event:any, stock:any, price:any)=>
{
   const currentCard = document.querySelector(`#cart${id}`);
   console.log(currentCard); 

   const ProductQuantity = currentCard?.querySelector('.CartQuantity');

   const ProductPrice = currentCard?.querySelector('.CartItemPrice');


//HERE WE WANT TWO THINGS TO DISPLAY ON CART, BY INCREMENTING AND DECREMENTING, LIKE TOTAL PRICE AND QUANTITY USING LS:

let quantity = 1;
let LocalStorageprice = 0;

//NOW AGAIN I NEED TO TAKE THE REFERENCE OF LS AGAIN, AND THEN USING FIND(), CHECK FOR THE SPECIFIC ID CARD: 

const CartProductArray: any = getCartProductLS();

let ExistingProductArr = CartProductArray.find((curProd:any)=> curProd.id === id);

if(ExistingProductArr)
{
    quantity = ExistingProductArr.quantity;
    LocalStorageprice = ExistingProductArr.price;
}
else{
    LocalStorageprice = price;
    price = price;    //so that the price is asusual
}


//NOW AFTER DEFININGTHE PRICE AND QUANTITY, I CAN WRITE THE CODE FOR INCREMENT AND DECREMENT: 

if(event.target.className === "CartIncrement")
{
    if(quantity < stock)
    {
        quantity += 1;
    }
    else if(quantity == stock)
    {
        quantity = stock;
        LocalStorageprice = price * quantity;  //update the price, after performing increment and decrement
    }
}

if(event.target.className === "CartDecrement")
{
    if(quantity > 1)
    {
        quantity -= 1;
    }
}

//FINALLY, WE NEED TO UPDATE THE PRICE IN ACTUAL LOCAL STORAGE: 
    LocalStorageprice = price * quantity;
    LocalStorageprice = Number(LocalStorageprice.toFixed(2)); // AS .toFixed() methods takes as stirng type

//!-----------------------------------------------------
//NOW UPDATING THE PRICE, AND QUANTITY, TO LOCAL STORAGE FOR SPCEIFIC CARDS:

let updatedCart = {id, quantity, price:LocalStorageprice}

updatedCart = CartProductArray.map((curProd: any)=> {
    return curProd.id === id ? updatedCart : curProd;
});

localStorage.setItem('CartItems', JSON.stringify(updatedCart));

//!-----------------------------------------------------


//? ONCE WE UPDATE THE LOCAL STORAGE, WE NEED TO ALSO REFLECTS ITS QUANTITY AND PRICE ON THE SCREEN/DOM, TOO SEE THE PRODUCT:

    // Update DOM
    if (ProductPrice) ProductPrice.textContent = LocalStorageprice.toString();
    if (ProductQuantity) ProductQuantity.textContent = quantity.toString();


    //! HERE WE NEED TO ALSO CALL THIS FUNCTION TO DISPLAY THE FINAL TOTAL VALUE, ON ANY OPEATION PERFORMED HERE ON INCREMENT OR DECREMENT: 
    DisplayTotalAmount(); //! MOST IMPORTANT

};