const footerHtml = `
 <section class="footer">
        <div class="footer-content">
            <div class="brand-logo">
                <img src="Public/images/Quickkart_Logo.png" alt="logo">
            </div>
            <div class="pages">
                <li><a href="./index.html">Home</a></li>
                <li><a href="./Product.html">Product</a></li>
                <li><a href="./Contact.html">Contact</a></li>
                <li><a href="./addToCart.htm">My Cart</a></li>
            </div>
            <div class="TermsCondition">
                <li><a href="#">Terms & Condtions</a></li>
                <li><a href="#">Cookie Policy</a></li>
                <li><a href="#">Accessibility</a></li>
                <li><a href="#">Privacy Policy</a></li>
            </div>
        </div>
        <hr />
        <div class="footer-copyright">
            <div class="copy-right-text">&copy; 2026 QuickKart - VIVEK CHAURASIYA PROJECT. ALL RIGHT RESERVED</div>
            <div class="social-links">
                <li><a href="#"><i class="fa-brands fa-facebook"></i>Facebook</a></li>
                <li><a href="#"><i class="fa-brands fa-instagram"></i>Instagram</a></li>
                <li><a href="#"><i class="fa-brands fa-square-x-twitter"></i>X</a></li>
                <li><a href="#"><i class="fa-brands fa-discord"></i> Discord</a></li>
            </div>
        </div>
    </section>
`;
const footerElement = document.querySelector('.footer'); //taking the referecne of footer block
footerElement?.insertAdjacentHTML("afterbegin", footerHtml); //using insertadjacenthtml, we have values like afterbegin, beforbegin, afterend , beforeend, we use afterbegin, so htat it appear first after calling...

//# sourceMappingURL=Product.de115af1.js.map
