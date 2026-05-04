"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchPriceQuantity = void 0;
const getCartProductLS_1 = require("./getCartProductLS");
const fetchPriceQuantity = (id, price) => {
    //NOW HERE I CALL THE LOCAL STORAGE FUNCTION, TO GET THE ACUTAL PRICE AND QUANTITY THAT ARE STORED ON LOCALSTORAGE: 
    const GetPriceQuantity = (0, getCartProductLS_1.getCartProductLS)();
    let quantity = 1;
    let ExistingCart = GetPriceQuantity.find((curProd) => Number(curProd.id) === Number(id));
    if (ExistingCart) {
        //! IF THE EXISTINGCART ITEMS ARE THERE, NOW WITH THE HELP OF THAT WE CAN GET THE PRICE AND QUANTITY FORM THE LS: 
        quantity = ExistingCart.quantity;
        price = ExistingCart.price;
    }
    return { quantity, price }; //PASSING THE LS QUANTITY AND PRICE: 
};
exports.fetchPriceQuantity = fetchPriceQuantity;
//# sourceMappingURL=fetchPriceQuantity.js.map