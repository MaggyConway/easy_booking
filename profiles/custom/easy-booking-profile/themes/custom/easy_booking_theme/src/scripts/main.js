import polyfills from './polyfills';
import './logo/logo';
import './mobile-menu/mobile-menu';
import './basket/basket';
import './filter/filter';
import './header-form/guests-dropdown';
import './header-form/select';
import './header-form/daterange';
import './room/select-country';
import './attractions/attractions-card-rout';
import cookieMargin from './cookie/cookie-margin';

(() => {
  polyfills();
  cookieMargin();
})();
