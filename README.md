
## Typescript Demo 

The project QuickKart is developed using TypeScript and Parcel. Since the project is built with TypeScript, all TypeScript files are first compiled into JavaScript before they can run in the browser.

TypeScript provides the ability to convert all .ts files into JavaScript files automatically using a single command:

``` bash
tsc --watch
```

This command runs the TypeScript compiler in watch mode. The main advantage of using watch mode is that it continuously monitors the project files for changes and automatically recompiles them whenever a file is updated.

Without using watch mode, the developer would need to manually compile every file repeatedly after making changes using commands such as:

```bash
tsc Filename.ts
```

This becomes inefficient for larger projects because the command must be executed again after every modification.

## Execution Behavior
``` tsc . ```
This is a one-time compilation command. It searches the current directory for the tsconfig.json configuration file. After compiling the project according to the configuration settings, the process exits automatically.

```bash
tsc --watch or tsc -w
```

This starts a persistent watching process. The project is compiled once initially. After compilation, TypeScript continuously watches all project files. Whenever any file is modified and saved, the project recompiles automatically.

This makes development much faster and more efficient.

## Incremental Builds

The tsc --watch command is optimized for development because it supports incremental builds.

Benefits of Incremental Compilation:
Only modified files are recompiled
Faster build performance
Reduced compilation time compared to full project compilation

This makes watch mode significantly more efficient than running a complete compilation repeatedly using tsc ..

## Parcel

Parcel is used with TypeScript because it provides a zero-configuration build system. This means developers do not need to manually configure complex loaders, plugins, or bundlers in order to run TypeScript projects.

Parcel automatically: Detects TypeScript files ,Compiles TypeScript into JavaScript ,Bundles assets , Serves the project to the browser

without requiring additional setup.

Parcel is a web application bundler similar to Webpack, but much simpler and easier to configure. It simplifies the process of:

Building applications
Bundling JavaScript
Bundling CSS
Managing assets for web development

One of the biggest advantages of Parcel is its Hot Module Reloading (HMR) functionality.

Hot Module Reloading Benefits:
Detects file changes automatically
Reflects updates instantly in the browser
Improves development speed
Removes the need for manual browser refresh

Overall, Parcel provides a complete zero-configuration development experience.


## Project Setup Commands
1. Initialize package.json

The first step is creating a package.json file for the project.

```bash
npm init -y
```

This command initializes the Node.js project with default configuration settings.

2. Install Parcel

After initializing the project, Parcel is installed as a development dependency.

```bash
npm i parcel --save-dev
```

This installs Parcel locally inside the project.

## Project Structure

After installing Parcel:

A src folder is created for TypeScript files. This folder contains files such as:  index.ts

On the project root level:

index.html is created, 
CSS folders with files are created
CSS files are connected using the href attribute inside the HTML file.

Note: Inside index.html, the TypeScript file is connected using the <script> tag source.

Parcel automatically: Detects the TypeScript file ,
Compiles it into JavaScript , Executes the generated JavaScript in the browser.

## Configuration

To generate TypeScript configuration files, the following command is used:

```bash
tsc --init
```

This creates a tsconfig.json file.

Inside tsconfig.json, certain configuration options can be modified or uncommented, such as:

"noEmitOnError": true
Purpose of noEmitOnError Prevents JavaScript file generation if TypeScript errors exist Helps maintain error-free builds.

## Running the Project

After completing the configuration, scripts are added inside package.json under the "scripts" section.

These scripts are responsible for:

Running the project AND Watching file changes automatically

```bash
"start": "(npx parcel ./index.html) & npx parcel watch ./index.html"
```


## Starting the Project

To run the project, the following command is executed:

```bash
npm start
```

After running this command:

Parcel starts the development server
TypeScript files are compiled automatically
Browser updates occur automatically during development.

## Dist Folder

After successful compilation and bundling, Parcel automatically creates a new folder called:  Dist

The dist folder contains:
 Compiled JavaScript files
Bundled CSS files
Optimized project assets

These generated files are responsible for executing the application in the browser. 
# QUICKKART 

This project is a fully functional e-commerce website designed with multiple sections, including a product listing page, contact page, and add-to-cart functionality. The application features a responsive user interface that ensures a seamless experience across devices such as mobile phones, tablets, and desktops. The design follows a desktop-first approach, which is then adapted for smaller screens to maintain usability and consistency.

The core functionality of the project revolves around dynamic product rendering. Product data is fetched from a local API file (api.json) and displayed on the interface using JavaScript. Template-based rendering techniques are used to dynamically populate product details such as images, names, and prices.

The project is built using Parcel, a fast, zero-configuration web application bundler that efficiently compiles and optimizes assets like HTML, CSS, JavaScript, TypeScript, and images into a production-ready format. Additionally, TypeScript is used to ensure type safety and improve code reliability by validating data types during development.

From a user interaction perspective, the website allows users to browse products, adjust quantities using increment and decrement controls, and view dynamically updated pricing based on their selections. The “Add to Cart” functionality enables users to store selected products along with their quantities in the browser’s local storage, ensuring persistence across sessions.

A dedicated contact page is integrated with Formspree, which allows users to submit their contact details. These submissions are securely processed and forwarded to the administrator without requiring a custom backend.

The project also includes an FAQ section implemented using an accordion interface to improve content organization and user experience.

The cart page is dynamically generated by retrieving stored data from local storage and matching it with product data from the API. It displays relevant product details such as images, names, quantities, and updated prices. Users can further modify quantities or remove items entirely, with changes instantly reflected in the user interface.

To enhance user feedback, a toast notification system is implemented. Whenever a user adds or removes a product, a real-time notification confirms the action, improving overall usability and interaction clarity.

For deployment, the project is hosted on Netlify. The application is first built using Parcel with a production build command, which generates an optimized dist folder containing all compiled assets. This dist directory is then deployed to Netlify, making the website publicly accessible. As a result, users can easily access the live application and experience its features in a real-world environment.

Overall, this project demonstrates a modern approach to front-end development by combining responsive design, dynamic data handling, local storage management, efficient build tooling, and user-friendly interactive features.
## Deployment

To deploy this project run

```bash
  npm start build
```

after completion of the project, we need to deploy it online, for that, using the command build, it converts the complete files to dist folder. 
This Dist folder can be deployed to server , and can be accessible from anywhere.

For Running the Project:

```bash
npm start
```
This Project is Deployed on Netlify , Access it from below link: 

```bash
https://quickkartshopping.netlify.app/
```
## Home section

The project includes a responsive navigation bar that provides easy access to key sections of the website, including Home, Products, Contact, and Cart. The navigation is designed to be intuitive and accessible across all device sizes, ensuring a consistent user experience.

Within the Home section, the header features an interactive carousel animation that enhances visual appeal and improves user engagement. This component highlights key content in a dynamic and attractive manner, contributing to a modern user interface.

The Products section is implemented using a dynamic rendering approach. A reusable HTML template is defined for a single product card, which is then populated using JavaScript. Product data is fetched from an API, and multiple product cards are generated programmatically. This approach ensures scalability and maintainability, as new products can be added without modifying the core structure.

To further enhance the visual experience, an infinite scrolling animation is incorporated. This animation moves content horizontally across the screen, creating a continuous scrolling effect. The implementation involves a parent container that holds a track element responsible for the animation. Inside the track, product elements are repeated to ensure a seamless looping effect. Styling and animations are implemented using Sass (SCSS), allowing for more structured and maintainable styling. The animation is applied to the track element, while the container controls the visible area.

Finally, the website includes a well-structured footer section that provides essential information such as brand identity, social media links, quick navigation links, and copyright details. The footer is designed to be clean, informative, and aligned with the overall user interface of the website.

## Product Section

First we Create DisplayProduct.ts, which contains the functionality to display the product on webpages.

The Product Section is designed using a data-driven and modular approach to ensure scalability and maintainability.

Initially, a product dataset is created in the form of an API (api.json), structured as an array of objects:
[{}, {}, {}...].
Each object contains essential product attributes such as id, name, price, image, category, and stock. Since the project follows a modular architecture, the API is accessed using ES module syntax (import/export), enabling clean separation of concerns.

In the main TypeScript file, a dedicated function is implemented to handle product rendering. This function first validates whether the API data is available. If no data is found, the function safely exits to prevent runtime errors. If data is present, it iterates over each product item to dynamically generate UI components.

A key part of the implementation is the use of the HTML <template> element. This element acts as a reusable structure for defining a single product card. Instead of manually creating multiple cards, the template is cloned dynamically using:

document.importNode(template.content, true)

Before cloning, references to both the template element and the target product container are obtained. For each product in the API, a product clone is created and populated with real data.

Using object destructuring, product properties such as id, name, image, and price are extracted and injected into the cloned template. Each cloned card is then assigned a unique identifier using setAttribute, ensuring that individual product elements can be accessed and manipulated independently. For example:

setAttribute('id', card${id}`)`

This approach allows precise control over each product card, enabling features like updates, event handling, and state management.

After populating the data, each cloned node is appended to the main product container, resulting in a fully dynamic product listing rendered on the page.

The <template> element serves as a blueprint for the UI. Inside it, a structured layout is defined:

A parent container (card wrapper)
An <article> element to semantically describe the product
Child elements for product category, title, image, price, and stock details

This ensures both semantic correctness and reusability.

While working with TypeScript and Parcel, a specific consideration is made for handling images. Direct use of the src attribute can sometimes cause bundling issues. To address this, a data-src attribute is used and later dynamically assigned via JavaScript. The alt attribute is still utilized to provide meaningful descriptions for accessibility and SEO.

An important implementation detail is the dynamic assignment of IDs within cloned elements. By first selecting an element inside the template and then updating its ID using string literals, each card becomes uniquely identifiable. This technique enables efficient access to internal elements of each card for further interactions.

Overall, this section demonstrates efficient use of templates, dynamic DOM manipulation, modular data handling, and TypeScript-based development practices to build a scalable and interactive product listing system.

## Product Section

First we Create DisplayProduct.ts, which contains the functionality to display the product on webpages.

The Product Section is designed using a data-driven and modular approach to ensure scalability and maintainability.

Initially, a product dataset is created in the form of an API (api.json), structured as an array of objects:
[{}, {}, {}...].
Each object contains essential product attributes such as id, name, price, image, category, and stock. Since the project follows a modular architecture, the API is accessed using ES module syntax (import/export), enabling clean separation of concerns.

In the main TypeScript file, a dedicated function is implemented to handle product rendering. This function first validates whether the API data is available. If no data is found, the function safely exits to prevent runtime errors. If data is present, it iterates over each product item to dynamically generate UI components.

A key part of the implementation is the use of the HTML <template> element. This element acts as a reusable structure for defining a single product card. Instead of manually creating multiple cards, the template is cloned dynamically using:

document.importNode(template.content, true)

Before cloning, references to both the template element and the target product container are obtained. For each product in the API, a product clone is created and populated with real data.

Using object destructuring, product properties such as id, name, image, and price are extracted and injected into the cloned template. Each cloned card is then assigned a unique identifier using setAttribute, ensuring that individual product elements can be accessed and manipulated independently. For example:

setAttribute('id', card${id}`)`

This approach allows precise control over each product card, enabling features like updates, event handling, and state management.

After populating the data, each cloned node is appended to the main product container, resulting in a fully dynamic product listing rendered on the page.

The <template> element serves as a blueprint for the UI. Inside it, a structured layout is defined:

A parent container (card wrapper)
An <article> element to semantically describe the product
Child elements for product category, title, image, price, and stock details

This ensures both semantic correctness and reusability.

While working with TypeScript and Parcel, a specific consideration is made for handling images. Direct use of the src attribute can sometimes cause bundling issues. To address this, a data-src attribute is used and later dynamically assigned via JavaScript. The alt attribute is still utilized to provide meaningful descriptions for accessibility and SEO.

An important implementation detail is the dynamic assignment of IDs within cloned elements. By first selecting an element inside the template and then updating its ID using string literals, each card becomes uniquely identifiable. This technique enables efficient access to internal elements of each card for further interactions.

Overall, this section demonstrates efficient use of templates, dynamic DOM manipulation, modular data handling, and TypeScript-based development practices to build a scalable and interactive product listing system.

## Product Section

First we Create DisplayProduct.ts, which contains the functionality to display the product on webpages.

The Product Section is designed using a data-driven and modular approach to ensure scalability and maintainability.

Initially, a product dataset is created in the form of an API (api.json), structured as an array of objects:
[{}, {}, {}...].
Each object contains essential product attributes such as id, name, price, image, category, and stock. Since the project follows a modular architecture, the API is accessed using ES module syntax (import/export), enabling clean separation of concerns.

In the main TypeScript file, a dedicated function is implemented to handle product rendering. This function first validates whether the API data is available. If no data is found, the function safely exits to prevent runtime errors. If data is present, it iterates over each product item to dynamically generate UI components.

A key part of the implementation is the use of the HTML <template> element. This element acts as a reusable structure for defining a single product card. Instead of manually creating multiple cards, the template is cloned dynamically using:

document.importNode(template.content, true)

Before cloning, references to both the template element and the target product container are obtained. For each product in the API, a product clone is created and populated with real data.

Using object destructuring, product properties such as id, name, image, and price are extracted and injected into the cloned template. Each cloned card is then assigned a unique identifier using setAttribute, ensuring that individual product elements can be accessed and manipulated independently. For example:

setAttribute('id', card${id}`)`

This approach allows precise control over each product card, enabling features like updates, event handling, and state management.

After populating the data, each cloned node is appended to the main product container, resulting in a fully dynamic product listing rendered on the page.

The <template> element serves as a blueprint for the UI. Inside it, a structured layout is defined:

A parent container (card wrapper)
An <article> element to semantically describe the product
Child elements for product category, title, image, price, and stock details

This ensures both semantic correctness and reusability.

While working with TypeScript and Parcel, a specific consideration is made for handling images. Direct use of the src attribute can sometimes cause bundling issues. To address this, a data-src attribute is used and later dynamically assigned via JavaScript. The alt attribute is still utilized to provide meaningful descriptions for accessibility and SEO.

An important implementation detail is the dynamic assignment of IDs within cloned elements. By first selecting an element inside the template and then updating its ID using string literals, each card becomes uniquely identifiable. This technique enables efficient access to internal elements of each card for further interactions.

Overall, this section demonstrates efficient use of templates, dynamic DOM manipulation, modular data handling, and TypeScript-based development practices to build a scalable and interactive product listing system.
## Product Counter Page

To implement the product counter functionality, the first step is to reference the parent container (e.g., stockContainer) within the product clone. This container includes the increment button, decrement button, and the quantity display element.

After attaching the necessary event listeners, define a function named productCounterPage, which accepts parameters such as id, stockValue, and event.

Once the required inputs are available, the next step is to identify the specific product card being interacted with. This is achieved by assigning a unique dynamic ID to each product card during the cloning process using setAttribute. When a user interacts with a card, this ID helps determine the currentCard, i.e., the exact product card that triggered the event.

After identifying the current card, its internal elements—such as price, stock value, and the increment/decrement controls—can be accessed. The counter logic primarily relies on the increment and decrement buttons.

By default, the product quantity is displayed as 1. To make this dynamic, we retrieve the current quantity using a custom attribute (e.g., total-quantity). If no value is set, it defaults to 1.

Example:

let productQuantity = currentCard?.querySelector('.Count-Value');

let quantity = parseInt(productQuantity?.getAttribute("total-quantity") || '1');


Counter Logic
Increment (Condition):

If the current quantity is less than the available stock (stockValue), increment the quantity. If it reaches the stock limit, restrict it to the maximum stock value.

Counter Logic Decrement  (Condition):
If the quantity is greater than 1, allow decrementing. This ensures the quantity never drops below the minimum allowed value.

After applying the appropriate operation, update the quantity dynamically on the UI.

Updating the Value

The updated quantity should be reflected both visually and in the element’s attribute:

productQuantity.innerText = quantity;
productQuantity?.setAttribute("total-quantity", String(quantity));

Finally, return the updated quantity value if needed for further processing.

## Add To Cart Page

After completing the increment and decrement functionality, the next step is to create a separate Add To Cart page.
This page is responsible for handling all cart-related operations whenever a user clicks the Add To Cart button on a specific product card.
1. Accessing Product Reference
Inside the displayProduct page, the first step is to take the product reference using productClone.
After getting the product reference, event listeners are added to each product card.
Once the user clicks the Add To Cart button, the addToCart() function is triggered with parameters such as:
Product ID
Product Price
Product Stock
These parameters help identify the selected product and its related details.

2. Creating the Add To Cart Page
A separate Add To Cart page is created to manage all selected cart items.
On this page, we first identify the specific product card clicked by the user.
Using the selected card, we can access:
Product details
Selected quantity
Product price
This allows us to work only with the currently selected product.
3. Calculating Total Amount
Once the product quantity and product price are retrieved, we calculate the total amount.
The total amount is calculated by multiplying:
Product Price
Product Quantity
This total amount represents the overall price for the selected product based on the selected quantity.
4. Storing Data in Local Storage
After calculating the total amount, the product data needs to be stored inside Local Storage.
Local Storage helps preserve cart data even after refreshing the page.
For storing and managing cart data, the following Local Storage methods are used:
localStorage.setItem()
localStorage.getItem()
localStorage.removeItem()
5. Creating Cart Object Structure
A structured object is created to store cart details.
The object contains:
Product ID
Product Quantity
Product Price
This object structure is then stored inside Local Storage for future access and updates.
6. Creating getCartProductLS() Function
A helper function named getCartProductLS() is created.
This function is responsible for retrieving cart data from Local Storage.
The function is called whenever cart data needs to be accessed or updated.
Using this function:
Existing cart products can be retrieved easily.
Updated values can be stored again inside Local Storage whenever required.
7. Retrieving Data from Local Storage
Inside the getCartProductLS() function, a variable is initialized to retrieve Local Storage data.
The function checks whether cart data exists inside Local Storage.
If no data exists:
The function returns an empty array [].
If data already exists:
The stored Local Storage data is converted back into a JavaScript array.
This allows easy access to stored cart products and their values.
8. Accessing Local Storage Data in Add To Cart Page
Back inside the main Add To Cart page, a variable is created to retrieve data from getCartProductLS().
This provides access to all cart products currently stored inside Local Storage.
Once the Local Storage array is accessed:
Product quantity can be modified
Product price can be updated
New products can be added into the cart array
9. Adding Product Data into Array
After retrieving the Local Storage array:
A new object is created containing:
Product ID
Product Price
Product Quantity
This object is then pushed into the Local Storage array.
The push() method helps insert the object into the array structure.
10. Updating Local Storage
After modifying the array, Local Storage is updated again.
Before storing:
The JavaScript array is converted into string format.
This updated array is then stored back inside Local Storage.
11. Creating updateCartNumber() Function
After implementing Add To Cart functionality, another function named updateCartNumber() is created.
This function is responsible for updating the cart count displayed on the navbar cart icon.
12. Updating Cart Number Logic
Inside the updateCartNumber() function:
The Local Storage array is retrieved again.
Since products are stored in array format:
The total cart count can be calculated using the array length.
This updated count is then reflected dynamically on the navbar cart button.
13. Problem with Duplicate Product Entries
A common issue occurs when the same product card is added multiple times.
The same product gets stored repeatedly inside Local Storage.
This creates:
Duplicate cart entries
Incorrect cart count
Incorrect total quantity calculations
14. Checking Existing Product
To solve the duplicate product issue:
A condition is added to check whether the product already exists inside Local Storage.
If the product already exists:
The same product card is not added again.
Instead:
Only the following values are updated:
Product Quantity
Product Price
15. Using find() Method
To check whether a product already exists inside the cart array, the find() method is used.
Purpose of find():
It returns a single matching product from the array.
It helps identify whether the current product already exists inside Local Storage.
16. Updating Existing Product Quantity
If:
The product already exists
The quantity is greater than 1

Then:

The new quantity is added with the previously stored quantity.
Instead of creating a duplicate product entry, only the quantity value is updated.
This ensures:
Correct quantity management
No duplicate product cards

17. Updating Total Price
After updating the quantity:
The total price is recalculated again.
The updated price is calculated based on:
Product Price
Updated Total Quantity
This provides the latest total amount for the selected product.

18. Updating Only Specific Product
Only the selected product should be updated, not the entire array.
For this:
The array is traversed using the map() method.
Inside map():
The currently selected product ID is matched with the existing product ID.
If IDs match:
The quantity and price are updated.
If IDs do not match:
Previous product values remain unchanged.
This ensures that only the required product gets updated inside the cart array.

19. Updating Local Storage Again
After updating:
Product Quantity
Product Price
The modified cart array is again stored inside Local Storage.
This keeps Local Storage updated with the latest cart values.

20. Creating Toast Notification Function
After implementing Add To Cart functionality, a reusable toast notification function is created.
Purpose of Toast Notification:
Notify the user when:
A product is added
A product is removed
Product quantity is updated
Toast notifications improve the overall user experience by providing instant feedback about cart actions.


⭐ Now Designing the Add To Cart Page
After implementing complete Add To Cart functionality, the final step is designing the Add To Cart page.
On this page, users can view:
All products stored inside Local Storage
Product quantity
Product price
Total amount
Updated cart details
This allows users to review all selected products before proceeding further.




## Add To Cart HTML Page

In the Add To Cart HTML Page, all product-related information such as product ID, price, quantity, images, and other required details are accessed using Local Storage, instead of directly fetching the data from the API. This approach helps maintain the updated cart information based on the user’s selected products and quantities.

To retrieve the correct product details, we first take the reference from the Product API and match the product ID with the ID stored inside Local Storage. Once the IDs match, we can access the specific product and use all the required information that needs to be displayed on the Add To Cart page.

The product data is displayed using Template Elements with JavaScript. Here, template tags are used to define all the required UI elements that should appear on the page, such as:

Product Image
Product Price
Product Quantity
Remove Button
Product Details

For displaying the updated product quantity and updated total price, the values are not taken directly from the API. Instead, these values are retrieved from Local Storage, because Local Storage contains the latest updated cart data selected by the user. To achieve this, the Local Storage array is accessed again, which contains all cart-related functionality and updated product information.

At the end of the page, a separate script file such as showAddToCart.ts is used. This file is responsible for dynamically displaying all cart products. Similar to the product display section, the implementation is done using productClone, where:

The product reference is taken first
The template reference is accessed
A clone is created for each specific product item
All required product values are inserted dynamically into the template
About the showAddToCart Page

After defining the product section, the next step is creating a Summary Table. This table is responsible for displaying:

Total Product Amount
Total Amount Before Tax
Tax Amount
Final Amount After Tax

The summary values are generated dynamically based on:

Total Product Quantity
Updated Product Price stored inside Local Storage

The tax amount remains fixed and is added to the final payable amount. This helps generate the complete billing summary that the user needs to pay before proceeding further.

## showAddToCart

In the showAddToCart page, the first step is taking the reference of the template element and the product section to display all product items stored inside Local Storage. The main objective of this page is to display cart data based on Local Storage instead of directly rendering products from the API.

To achieve this, the Product API is accessed to retrieve all the required product resources needed on the page, such as:

Product Image
Product Name
Product Details
Product Stock Information

After importing the API data, a variable is created that calls getCartProductfromLS(), which contains all the cart items selected by the user.

The next step is filtering the API data. Here, the API array is traversed using the filter() method with a parameter such as curElem. Using this parameter, the API product ID is compared with the product IDs stored inside Local Storage.

While comparing the API IDs with Local Storage IDs, the find() method is not used because find() only returns a single matching product. In this case, multiple products stored inside Local Storage need to be returned. Therefore, the some() method is used with the Local Storage array. The some() method checks all Local Storage items and returns every product that satisfies the matching condition.

The comparison is performed between:

API Product ID
Local Storage Product ID

Once the IDs match, the filtered product data is returned successfully.

After filtering the products, the returned product array is traversed using the forEach() loop. During this traversal:

A clone is created for each product
All required values are inserted dynamically into the template
Each product is displayed individually on the webpage

Although the cloned data contains product details from the API, the updated quantity and updated total price should come from Local Storage instead of the API. To solve this, another helper function is created that accesses Local Storage and retrieves:

Updated Product Quantity
Updated Product Price

These updated values are then inserted into the cloned template so that the webpage always displays the latest cart information stored in Local Storage.

fetchPriceQuantity Page

In the fetchPriceQuantity page, a function is created with parameters such as:

Product ID
Product Price

Inside this function, the first step is accessing the Local Storage array.

After accessing Local Storage:

The function checks whether the given product ID exists inside Local Storage.
If the ID exists, the function retrieves the corresponding:
Updated Quantity
Updated Price

These updated values are then returned in object format.

Once the updated price and quantity are retrieved, the process returns back to the main showAddToCart page. The returned object is stored inside a variable such as isActual, allowing access to:

Updated Local Storage Quantity
Updated Local Storage Price

Using these values, the webpage displays the latest cart quantity and updated total amount instead of API values.

After cloning all products successfully, the cloned product elements are appended into the product section to display them on the webpage.

Remove To Cart Functionality

Next, another function named removeToCart() is created with a parameter such as id.

The purpose of this function is:

Remove the selected product from Local Storage
Remove the selected product from the DOM
RemoveLSItems(id)

Inside RemoveLSItems(id):

The product ID is received as an event from the user action.
The first step is accessing the Local Storage array again using the Local Storage helper function.

Once Local Storage data is retrieved:

The filter() method is applied.
The filter condition removes the product whose ID matches the selected product ID.
All remaining products are returned as they are.

The filtered result is stored inside a variable such as removeItem.

After filtering:

Local Storage is updated again using the modified array.
The updated Local Storage now contains all products except the deleted product.

However, removing the product only from Local Storage does not automatically remove it from the DOM. Therefore:

The reference of the selected product card is taken
The selected product container is stored inside a variable such as removeDiv

Once the user clicks the remove button:

The selected DOM element is removed dynamically from the webpage.

After removing the product:

updateCartNumber() is called again
This updates the latest cart count based on updated Local Storage values

Additionally:

The toast function is called again with the remove parameter
This displays a notification indicating that the selected product has been removed successfully
Increment and Decrement Functionality in showAddToCart

After implementing remove functionality, increment and decrement functionality is added again inside the showAddToCart page.

Here:

The reference of the parent container for the item counter is taken
The cartItemCounter section is accessed
Event listeners are added with parameters such as:
Product ID
Product Price
Product Stock

Using these values:

Increment operation is performed
Decrement operation is performed

This updates:

Product Quantity
Product Price
Total Amount

directly from Local Storage values.

CartIncrementDecrement()

Inside the CartIncrementDecrement() method:

The first step is identifying which product card was clicked by the user.
The current product card reference is taken.

Using this reference:

Quantity attributes are updated dynamically
This time, the product price is retrieved directly from Local Storage instead of API values

To access Local Storage values:

A Local Storage array is created again using getCartProductfromLS()

This part is one of the most important sections because it handles:

Quantity updates
Price updates
Dynamic Local Storage synchronization

After updating quantity and price:

displayTotalAmount() is called again
This ensures the final cart summary is updated dynamically.
DISPLAYTOTALAMOUNT()

Inside DISPLAYTOTALAMOUNT():

The first step is taking the reference where the total amount needs to be displayed.
After retrieving the product price:
Tax is added to the total price
The final payable amount is generated

To calculate the total amount for multiple products:

The reduce() method is performed on all product prices

The reduce() method helps:

Sum all product prices
Generate the final total amount for all cart products

Finally:

The total amount before tax
Tax amount
Final payable amount after tax

are updated dynamically on the webpage based on the latest cart conditions.


## ShowToast Page

In the ShowToast page, the first step is defining a function named toast() with a parameter such as operation. This parameter is used to identify the type of action performed by the user, such as:

Add Product
Remove Product

Based on the operation value, the toast notification message is generated dynamically.

The next step is creating a new div element dynamically using document.createElement('div'). This newly created div is stored inside a variable called toast.

After creating the div, a class name is assigned to it using classList.add(). Here, a class such as toast is added to the div. This class helps apply styling and design to the toast notification.

Once the class is assigned, the DOM content is modified dynamically based on the operation performed by the user.

If the operation is "remove":
The toast message displays:
Product with specific ID has been removed.
Otherwise:
The toast message displays:
Product with specific ID has been added.

This allows dynamic notification messages for both add and remove operations.

After generating the message, the toast notification needs to be displayed on the webpage. For this:

The created toast div is appended inside the document.body.
Once appended, the toast becomes visible on the DOM and is displayed to the user.

At the end, an asynchronous timing event is implemented using setTimeout().

The purpose of this timeout functionality is:

Display the toast notification temporarily
Automatically remove it after a few seconds

Here:

A timeout duration of approximately 2 seconds is used.
After the timeout completes, the toast element is removed from the DOM dynamically.

This creates a smooth notification effect where:

The toast appears on the screen
Displays the success message
Automatically disappears after a short duration

This improves the overall user experience by providing instant visual feedback for cart actions.


## Contact Section
In the Contact Section, a form is created to collect user input such as:


User Name


Email Address


Message


Other required details


The entered form data is submitted to the server using:


Form action


POST method


To handle form submissions, an external service called Formspree is used. Formspree is a free platform that collects user form data and sends it directly to the owner’s email address. This helps manage contact form submissions without creating a custom backend server.
After defining the form section, additional brand-related information is displayed, including:


Brand details


Contact information


Google Map location


Other company-related details



Frequently Asked Questions (FAQ) Section
After the Contact section, a Frequently Asked Questions (FAQ) section is designed.
Structure of FAQ Section


First, a main FAQ container is created.


Inside the main container, multiple FAQ item containers are added.


Each FAQ container contains:


Question


Answer




These FAQ items can be created in multiple numbers depending on the required content.

FAQ Show and Hide Functionality
Using CSS:


The answer section is initially hidden.


Using basic JavaScript functionality:


A toggle feature is implemented to:


Show the answer


Hide the answer




This creates an interactive FAQ section where users can expand or collapse questions dynamically.
The functionality is handled inside a separate script file such as:


Faq.ts



TypeScript Compilation
Since the entire project is developed using TypeScript, the TypeScript files must first be compiled into JavaScript before execution.
For compilation:


The TypeScript compiler command is used.


This converts:


.ts files into .js files


The generated JavaScript files are then responsible for running the application functionality inside the browser.
