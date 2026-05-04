"use strict";
//HERE FIRST I NEED TO TAKE THE REFRENCE OF CONTAINER WHCIH RETURNS IN ARRAY FORM, THAT CONTAINS ALL QUESTION AND ANSWER, WHICH IS FAQ CONTAINER, SO WE CAN GET IT USING TRAVERSAL TO GET A SPECIFIC ITEMS FORM THE ARRAY.
Object.defineProperty(exports, "__esModule", { value: true });
const getCartProductLS_1 = require("./getCartProductLS");
const UpdateCartNumber_1 = require("./UpdateCartNumber");
//ACCESSING THE LOCAL STORAGE INTO THE FAQ SECTION, SO THAT WE CAN GET EHT TOTAL LENGHT OF ITEMS IN THE CART.
const LSData = (0, getCartProductLS_1.getCartProductLS)();
const FAQ = document.querySelectorAll('.Faq-Container');
FAQ.forEach((curEle) => {
    //HERE WE NEED TO GET ONLY ANSWER AND ICON, SO WE NEED TO TAKE ONLY THAT REFERENCES , WHILE ON CLICK: 
    let icon = curEle.querySelector('.icon');
    let answer = curEle.querySelector('.answer');
    //! NOW USING CLASSLIST PROPERTY WE CAN SIMPLY ADD ACTIVE CLASSES TO SEE THE ANSWER BLOCK, AS WE KNOW THAT WE HAVE A METHODS FOR CLASSLIST CONTAINS LIKE: ADD, REMOVE OR TOGGLE, USING TOGGLE, WE CAN SET THE 'ACTIVE' CLASS TO THE ICON OR ANSWER AND ALSO REMOVE IT ON CLICKING. 
    curEle.addEventListener('click', () => {
        icon?.classList.toggle('active');
        answer?.classList.toggle('active');
    });
});
//UPDATING THE CART: 
(0, UpdateCartNumber_1.UpdateCartNumber)(LSData);
//# sourceMappingURL=FAQ.js.map