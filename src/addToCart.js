"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addToCart = void 0;
const getCartProductLS_1 = require("./getCartProductLS");
const Toast_1 = require("./Toast");
const UpdateCartNumber_1 = require("./UpdateCartNumber");
(0, getCartProductLS_1.getCartProductLS)(); //HERE I CAN GIVE THIS FUNCTINO AS DEFAULT , SO THAT IT CALLS THE LOCAL STORAGE DATA, WHEN WE OPEN THE PAGE.
const addToCart = (id, stock, event) => {
    //HERE AGAIN , WE NEED TO FIRST FIND THE CURRENT CARD, WHICH A USER CLICKED...
    const CurrentCard = document.querySelector(`#card${id}`);
    //    console.log(CurrentCard);
    //HERE I NEED TO CREATE FUNCTION, THAT ARE RESPONSIBLE FOR RETREIVING THE DATA FROM THE LOCAL STOAGE:
    const LocalStorageArray = (0, getCartProductLS_1.getCartProductLS)();
    let quantity = Number(CurrentCard?.querySelector(".Count-Value")?.textContent);
    let price = Number(CurrentCard?.querySelector(".Product-Price")?.textContent.replace("₹", ""));
    // console.log(quantity , price);
    // -----------------------------------------------------
    //NOW, HERE I NEED TO CHECK FOR EXISTING PRODUCT:
    const existingProduct = LocalStorageArray.find((curProd) => curProd.id === id);
    //WE NEED TO ALSO CONSIDER THE QUANTITY, GREATER THAN ONE...
    if (existingProduct && quantity > 1) {
        //IF IT EXISTING PRODUCT WITH DIFFERENT QUANTITY, THAN WE NEED TO MAKE SURE, THAT [WE NEED TO ONLY UPDATE THE QUANTITY IN THE LS FOR THE PARTICULAR PRODUCT ONLY...]
        quantity = existingProduct.quantity + quantity;
        price = Number(price * quantity);
        // localStorage.setItem('CartItems', JSON.stringify(LocalStorageArray)); //WE DON'T USE THIS LINE, AS IF WE USE IT, THAN IT WILL REMOVE ALL THE PREVIOUS LS VALUES AND UPDATE WITH THIS VALUES, WHICH WE DON'T WANT.
        // WE WANT TO PUSH ONLY UPDATED QUANTITY AND PRICE IN THE LS FOR THE SPECIFIC CARDS ONLY: REMAINING WILL BE AS IT IS:
        //!HERE WE UPDATE THE LS ARRAY WITH SOME VALIDATION:
        let updatedCart = { id, quantity, price };
        updatedCart = LocalStorageArray.map((curProd) => {
            return curProd.id === id ? updatedCart : curProd;
        });
        localStorage.setItem("CartItems", JSON.stringify(updatedCart)); //! SET THE [GIVEN UPDATES SPECIC CARDS ITEMS ONLY] TO LOCAL STORAGE.
        //WHEN I UPDATE I WANT TO SHOW THE TOAST FOR ADDING:
        (0, Toast_1.ShowToast)("add", id);
    }
    // IF EXISTING PRODUCT IS THERE, NO NEED TO ADD TO CART:
    if (existingProduct) {
        // alert("Product Already Exists...");
        return false;
    }
    //--------------------------------------------------------
    //NOW AS WE WANT TO STORE ID, QUANTITY, AND TOTAL PRICE TO LOCAL STORAGE, SO FIRST WE NEED TO CALCULATE THE TOTAL PRICE:
    price = Number(price);
    price = price * quantity;
    //NOW I NEED TO PASS ALL THESE 3 : ID, TOTAL PRICE AND QUANTITY TO AN ARRAY, THEN SIMPLY PUT IT TO LOCAL STOTAGE:
    LocalStorageArray.push({ id, price, quantity }); //PUSHING ALL THE REQUIRED VALUES TO AN ARRAY.
    localStorage.setItem("CartItems", JSON.stringify(LocalStorageArray)); //SET THE ARRAY ITEMS TO LOCAL STORAGE.
    //WHEN I UPDATE I WANT TO SHOW THE TOAST FOR ADDING:
    (0, Toast_1.ShowToast)("add", id);
    //HERE I NEED TO CREATE A FUNCTION, THAT ALSO UPDATES THE CART VALUES ON THE NAVBAR, WHENEVER WE CLICK ADD TO CART BUTTON:
    (0, UpdateCartNumber_1.UpdateCartNumber)(LocalStorageArray);
};
exports.addToCart = addToCart;
//# sourceMappingURL=addToCart.js.map