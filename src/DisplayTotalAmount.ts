import { getCartProductLS } from "./getCartProductLS";

export const DisplayTotalAmount = ()=>
{
    //AGAIN I NEED TO TAKE THE REFERENCE OF PRICE FORM LOCAL STORAGE: 
    const CartProductArray: any = getCartProductLS();

    let initialValue = 0;
    let TotalAmount = CartProductArray.reduce((accum:any, curProd:any)=> {
        let ItemPrice = parseInt(curProd.price) || 0;
        return accum + ItemPrice;
    },initialValue);
    
    //NOW PUTTING ALL THE TOATL AMOUNT,SUB AMOUTN, TAX AMOUNT ON A WEBPAGE, SO THAT , IT DIRECTLY REFLECTS: 

let SubAmount = document.querySelector('.subTotal');
let FinalAmount = document.querySelector('.finalTotal');


// if(SubAmount) SubAmount?.textContent = `${TotalAmount}`;
   if (SubAmount) SubAmount.textContent = TotalAmount.toString();

   TotalAmount = Number(TotalAmount);
    if (FinalAmount) FinalAmount.textContent =  
    `${TotalAmount + 50}`;

    //! REMEMBER: HERE WE NEED TO DISPLAY THE TOTAL AMOUNT ON THE WEBPAGE, FORM THE LOCALSTORAGE, WHERE WE GET THE QUANTITY AND PRICE, ON THAT PAGE, WE NEED TO CALL THIS METHODS. 
}