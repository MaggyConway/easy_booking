import { behaviors } from 'Drupal';

export default () => {
  behaviors.cookieMargin = {
    attach() {
      window.addEventListener('load', () => {
        const cookieBanner = document.querySelectorAll('.eu-cookie-compliance-content');
        const cookieBannerBtn = document.querySelectorAll('.eu-cookie-compliance-content .eu-cookie-compliance-buttons .agree-button');
        const footer = document.querySelector('footer');

        if(cookieBanner.length > 0) {
            footer.classList.add('cookie-margin');
        }

        cookieBannerBtn.forEach((item) => {
                item.addEventListener('click', () => {
                    footer.classList.remove('cookie-margin');
                })
            })
        })
    },
  };
};
