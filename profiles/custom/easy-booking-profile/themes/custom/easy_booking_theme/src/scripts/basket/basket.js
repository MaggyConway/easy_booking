(function ($, Drupal) {
    $(document).ready(function() {

        const mobileBasket = document.querySelector('.path-cart form');

        if (mobileBasket) {
            mobileBasket.insertAdjacentHTML("afterbegin", `
            <div class="mobile-basket">
                <div class="mobile-basket__header">
                    <div class="header-item header-item__item"></div>
                    <div class="header-item header-item__price"></div>
                    <div class="header-item header-item__quantity"></div>
                </div>
            </div>`);

            const allItemsCart = document.querySelectorAll('.path-cart .views-form .views-view-table tbody tr');
            const mobileCartContainer = document.querySelector('.mobile-basket');

            allItemsCart.forEach((element, i) => {

                mobileCartContainer.insertAdjacentHTML("beforeend", `
                    <div class="mobile-basket__item">

                        <div class="mobile-basket__content">
                            <div class="content-item content-img"></div>
                            <div class="content-item content-price"></div>
                            <div class="content-item content-quantity"></div>
                        </div>

                        <div class="mobile-basket__info">
                            <div class="info-desc"></div>
                            <div class="info-delete"></div>
                        </div>

                        <div class="mobile-basket__footer">
                            <div class="footer-total"></div>
                            <div class="footer-price"></div>
                        </div>
                </div>`);

                const mobileBasketItem = document.querySelectorAll('.mobile-basket .mobile-basket__item');

                mobileBasketItem.forEach((item, index) => {
                    if(index === i) {
                    item.querySelector('.content-price').innerHTML = element.querySelector('.price-wrapper').innerHTML; //price
                    item.querySelector('.content-quantity').innerHTML = element.querySelector('.form-type-number').innerHTML;// input

                    item.querySelector('.info-desc').innerHTML = element.querySelector('.details-wrapper').innerHTML; //info

                    item.querySelector('.footer-total').innerHTML = document.querySelector('.views-view-table thead .views-field-total-price__number').innerHTML; //total
                    item.querySelector('.footer-price').innerHTML = element.querySelector('.views-field-total-price__number').innerHTML; //total price

                    item.querySelector('.content-img').appendChild(element.querySelector('.image-wrapper img').cloneNode()); //img
                    item.querySelector('.info-delete').appendChild(element.querySelector('.views-field-remove-button input').cloneNode()); //clear
                    }
                })
            })

            // replace content
            document.querySelector('.header-item__item').innerHTML = document.querySelector('.path-cart form thead .views-field-nothing').innerHTML; //Items
            document.querySelector('.header-item__price').innerHTML = document.querySelector('.path-cart form thead .views-field-nothing-1').innerHTML; //Price
            document.querySelector('.header-item__quantity').innerHTML = document.querySelector('.path-cart form thead .views-field-edit-quantity').innerHTML; //Quantity
        }

        const basketItem = document.querySelectorAll('.block-commerce-cart .cart--cart-block .cart-block--summary .cart-block--summary__count');

        basketItem.forEach((element) => {
            if(element.textContent !== "0 items") {
                element.classList.add('full-cart');
            }
        })
    });
})(jQuery, Drupal);
