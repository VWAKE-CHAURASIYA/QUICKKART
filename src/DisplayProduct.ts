import { addToCart } from "./addToCart";
import { ProductCounterPage } from "./ProductCounterPage";

const ProductContainer = document.querySelector('.ProductContainer');

const CardTemplate = document.querySelector('.CardTemplate') ;

  //DEFINING THE INTERFACE, INTERFACE DEFINES THE DATATYPES FOR THE INPUTS VALUES: 
    interface Product
    {
        id: number;
        image: string;
        name:  string;
        price: number;
        stock: number;
    }


//HERE I NEED TO DISPLAY THE CONTENT FOR ALL THE CARD ON THE WEBPAGE, SO HERE I NEED TO DEFINE THE FUNCTION, THAT TAKES API DATA AS PARAMETER:

//Product is a single object, not an array, Add [] to make it an array type 
export const DisplayProducts = (CurrProd:Product[])=>
{
    //HERE IF NO ANY DATA IN API, THEN RETURN FALSE:
    if(!CurrProd) return false;
    //ELSE, I NEED TO TAKE ALL THE DATA FROM THE API,AND USING DESTRUCTURE , MAKE A CLONE, AND PUT THE SPECIFIC VALUES FOR ALL THE CARDS AND PUT IT TO THE MAIN WEB PAGE.

    CurrProd.forEach((currItem)=>
    {
        const {id, image, name, price, stock } = currItem;

        //HERE I NEED TO FIRST CREATE A TEMPLATE CLONE, FOR ALL THE CARDS, USING IMPORTNODE METHODS, WITH ARGUMENT, TEMPLATECARD.CONTENT, WITH TRUE VALUE THAT ACTUALLY TAKES VALUES:
        //ProductContent , takes the whole DOM structure of html element for the cards.
        const ProductClone = document.importNode((CardTemplate as HTMLTemplateElement).content, true);

        ProductClone.getElementById('cardValue')?.setAttribute('id', `card${id}`);

        //NOW I NEED TO PUT EACH SPECIFIC API VALUES TO THE PRODUCT CLONE CONTAINER: 
        (ProductClone.querySelector('.ProductImage') as HTMLImageElement)?.setAttribute('src', image);

        (ProductClone.querySelector('.ProductImage') as HTMLImageElement)?.setAttribute('alt', name);

        (ProductClone.querySelector('.Product-name') as HTMLElement).textContent = name;

        
        (ProductClone.querySelector('.Product-Price') as HTMLElement).textContent = String(`₹${price}`);

        (ProductClone.querySelector('.Product-Actual-Price') as HTMLElement).textContent = String(` ₹${price * 1.2}`);

        (ProductClone.querySelector('.Stock-value') as HTMLElement).textContent = String(stock);

        //NOW ONCE CARD IS DISPLAYED, NOW I WANT TO WRITE THE CODE FOR PRODUCT COUNTER, FOR A PARTICULAR CARD: [USING EVENT DELEGATION]
        (ProductClone.querySelector('.stockcounter') as HTMLElement).addEventListener('click', (event)=> ProductCounterPage(id, stock, event));

        //NOW HERE ON THE SAME DISPALYPRODUCT PAGE, WHEN WE CLICK ON ADDTOCART BUTTON, IT WILL STORE THE PARTICULAR PRODUCT TO ADDTOCART PAGE: 
        (ProductClone.querySelector('.addToCart') as HTMLElement).addEventListener('click', (event)=> addToCart(id, stock, event));
        
        // ONCE VALUES OF API, IS INSERTED IN PRODUCT CLONE, THEN WE NEED TO APPEND WHOLE CARD DATA TO PRODUCTCONTAINERS:
        ProductContainer?.append(ProductClone);
    })
}