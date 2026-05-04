import { getCartProductLS } from "./getCartProductLS";

export const fetchPriceQuantity = (id:any, price:any)=>
{
    //NOW HERE I CALL THE LOCAL STORAGE FUNCTION, TO GET THE ACUTAL PRICE AND QUANTITY THAT ARE STORED ON LOCALSTORAGE: 

    const GetPriceQuantity: any = getCartProductLS();
    let quantity = 1;

    let ExistingCart = GetPriceQuantity.find((curProd:any)=> Number(curProd.id) === Number(id));

    if(ExistingCart)
    {
        //! IF THE EXISTINGCART ITEMS ARE THERE, NOW WITH THE HELP OF THAT WE CAN GET THE PRICE AND QUANTITY FORM THE LS: 
        quantity = ExistingCart.quantity;
        price = ExistingCart.price;  
    }

    return{quantity, price};  //PASSING THE LS QUANTITY AND PRICE: 
}