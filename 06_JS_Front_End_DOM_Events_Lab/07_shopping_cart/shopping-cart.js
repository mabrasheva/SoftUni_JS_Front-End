document.addEventListener('DOMContentLoaded', solve);

function solve() {

   const addButtonElements = document.querySelectorAll('button.add-product');
   const checkoutButtonElement = document.querySelector('button.checkout');
   const textareaElement = document.querySelector('textarea');
   let uniqueProducts = new Set;
   let totalPrice = 0;

   [...addButtonElements].forEach(button => {
      button.addEventListener('click', addProductToCart);
   });

   checkoutButtonElement.addEventListener('click', checkout);

   function addProductToCart(e) {
      const productElement = e.currentTarget.closest('div.product');
      const productTitle = productElement.querySelector('.product-title').textContent;
      const productPrice = parseFloat(productElement.querySelector('.product-line-price').textContent);

      uniqueProducts.add(productTitle);
      totalPrice += productPrice;

      textareaElement.value += `Added ${productTitle} for ${productPrice.toFixed(2)} to the cart.\n`;
   }

   function checkout() {
      [...addButtonElements].forEach(button => {
         button.disabled = true;
      });
      checkoutButtonElement.disabled = true;

      textareaElement.value += `You bought ${[...uniqueProducts].join(', ')} for ${totalPrice.toFixed(2)}.`
   }
}
