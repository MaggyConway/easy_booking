/**
 * @file
 * Cheeseburger Menu JavaScript file.
 */

(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.spCheeseBurgerMenu = {
    attach: function (context) {
      "use strict";

      var TIMEOUT = null;
      var BLOCK_ID = drupalSettings.block_id;
      var HEADER_HEIGHT = drupalSettings.headerHeight;
      var HEADER_SIZE = parseInt(HEADER_HEIGHT);
      var BREAKPOINTS = drupalSettings.breakpoints;
      var ACTIVATEMENU;
      var INSTANT_SHOW = drupalSettings.instant_show;
      var CURRENT_ROUTE = drupalSettings.current_route;
      var CHEESE_WRAPPER = ".cheeseburger-menu__wrapper";
      var CHEESE_TRIGGER = ".cheeseburger-menu__trigger";
      var CHEESE_LINK = ".cheeseburger-menu__menu-list-item-link";
      var CHEESE_LINK_ACTIVE = ".cheeseburger-menu__menu-list-item-link.active";
      var CHEESE_LINK_EXPANDED = ".cheeseburger-menu__menu-list-item--expanded";
      var CHEESE_LINK_PARENT = ".cheeseburger-menu__menu-list-item--parent";
      var CHEESE_LIST = ".cheeseburger-menu__menu-list";
      var CHEESE_LIST_ITEM = ".cheeseburger-menu__navigation-list-item";
      var CHEESE_LIST_ITEM_ACTIVE =
        ".cheeseburger-menu__navigation-list-item--active";
      var CHEESE_MENU = ".cheeseburger-menu__menu";
      var CHEESE_MENU_ACTIVE = ".cheeseburger-menu__menu--active";
      var CHEESE_LIST_TRIGGER = ".cheeseburger-menu__menu-list-trigger";
      var CHEESE_MENUS = ".cheeseburger-menu__menus";
      var ANIMATING = false;
      var ANIMATION_TIMEOUT = null;

      $(CHEESE_WRAPPER, context)
        .once("spCheeseBurgerMenu")
        .each(function () {
          INSTANT_SHOW ? init() : initOnAjax();

          Math.easeInOutQuad = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1) {
              return (c / 2) * t * t + b;
            }
            t--;
            return (-c / 2) * (t * (t - 2) - 1) + b;
          };

          function init() {
            var $active = $(CHEESE_LINK_ACTIVE);

            $(CHEESE_WRAPPER).css({ display: "" });

            $(CHEESE_TRIGGER).on("click touchstart", function (e) {
              e.preventDefault();
              toggleMenu(e);
            });

            function toggleMenu(e) {
              e.stopPropagation();

              if (!ANIMATING) {
                ANIMATING = true;
                if ($(CHEESE_WRAPPER).hasClass("menu-is-visible")) {
                  $(`body, ${CHEESE_WRAPPER}`).removeClass("menu-is-visible");
                  $(CHEESE_TRIGGER).removeClass("is-open");
                } else {
                  $(`body, ${CHEESE_WRAPPER}`).addClass("menu-is-visible");
                  $(CHEESE_TRIGGER).addClass("is-open");
                }
                clearTimeout(ANIMATION_TIMEOUT);
                ANIMATION_TIMEOUT = setTimeout(function () {
                  ANIMATING = false;
                }, 200);
              }
            }

            function scrollTo(element, to, duration) {
              var start = element.scrollTop;
              var change = to > $(element).height() ? $(element).height() : to;
              var currentTime = 0;
              var increment = 20;

              var animateScroll = function () {
                currentTime += increment;
                var val = Math.easeInOutQuad(
                  currentTime,
                  start,
                  change,
                  duration
                );
                element.scrollTop = val;
                if (currentTime < duration) {
                  clearTimeout(TIMEOUT);
                  TIMEOUT = setTimeout(animateScroll, increment);
                }
              };

              animateScroll();
            }

            $(
              [
                `${CHEESE_LIST_ITEM}`,
                `${CHEESE_LIST_ITEM} a`,
                `${CHEESE_LIST_ITEM} img`,
                `${CHEESE_LIST_ITEM} span`,
              ].join(" ")
            ).on("click touchstart", handleClick);

            function handleClick(e) {
              var selectedMenu = $(this).parent().attr("data-drupal-selector");

              if (
                selectedMenu !== "cheeseburger-menu--cart" &&
                selectedMenu !== "cheeseburger-menu--phone"
              ) {
                e.preventDefault();

                $(CHEESE_LIST_ITEM).removeClass(
                  CHEESE_LIST_ITEM_ACTIVE.repeat(".", "")
                );

                $(this)
                  .parent()
                  .addClass(CHEESE_LIST_ITEM_ACTIVE.repeat(".", ""));

                $(CHEESE_MENU).removeClass(CHEESE_MENU_ACTIVE.replace(".", ""));
                $(
                  `${CHEESE_MENU}[data-drupal-selector="${selectedMenu}"]`
                ).addClass(CHEESE_MENU_ACTIVE.replace(".", ""));

                var elem = $(`${CHEESE_MENU_ACTIVE} ${CHEESE_LIST_TRIGGER}`);

                var topPosEl = elem.offset();
                var topPos = topPosEl.top;

                scrollTo(
                  document.getElementsByClassName(
                    CHEESE_MENUS.replace(".", "")
                  )[0],
                  topPos - HEADER_SIZE,
                  600
                );
              }
            }

            var SCROLL_CHECK = false;
            var SCROLL_START = 0;
            var SCROLL_END = 0;

            var EXPANDED_SELECTOR = [
              `${CHEESE_LINK_EXPANDED} > a`,
              `${CHEESE_LINK_EXPANDED} > img`,
              `${CHEESE_LINK_EXPANDED} > span`,
            ].join(", ");

            $(EXPANDED_SELECTOR).on("touchstart", function (event) {
              SCROLL_START = $(CHEESE_MENUS).scrollTop();
            });

            $(EXPANDED_SELECTOR).on("touchend", function (event) {
              SCROLL_END = $(CHEESE_MENUS).scrollTop();
              if (SCROLL_START !== SCROLL_END) {
                SCROLL_CHECK = true;
              } else {
                SCROLL_CHECK = false;
              }
            });

            $(EXPANDED_SELECTOR).bind("mouseup touchend", function (e) {
              if (SCROLL_CHECK === false) {
                if (
                  $(this).parent().attr("class") ===
                  CHEESE_LIST.replace(".", "")
                ) {
                  $(`${CHEESE_LINK_PARENT} > ul.open-parent`).toggleClass(
                    "open-parent"
                  );
                } else {
                  $(this).next("ul").toggleClass("open-child");
                }
                $(this).next("ul").toggleClass("open-parent");
                $(this).toggleClass("is-opened");
              }

              if (e.handled === false) {
                return;
              }

              e.handled = true;
              e.preventDefault();
              e.stopPropagation();
            });

            var TOUCH_MOVED;

            $(CHEESE_WRAPPER)
              .on("touchmove", function (e) {
                TOUCH_MOVED = true;
              })
              .on("touchstart", function () {
                TOUCH_MOVED = false;
              });

            $([`${CHEESE_LINK}`, `${CHEESE_LINK} span`].join(", ")).on(
              "mouseup touchend",
              function (e) {
                if (
                  $(this).hasClass(CHEESE_LINK_PARENT.replace(".", "")) ||
                  $(this)
                    .parent("li")
                    .hasClass(CHEESE_LINK_PARENT.replace(".", ""))
                ) {
                  try {
                    e.preventDefault();
                    e.stopPropagation();
                  } catch (error) {}

                  return;
                }

                if (!TOUCH_MOVED) {
                  if($(e.target).attr("href")) {
                    window.location.href = $(e.target).attr("href");
                  }
                  if ($(CHEESE_WRAPPER).hasClass("menu-is-visible")) {
                    toggleMenu(e);
                  }
                }
              }
            );

            $(CHEESE_WRAPPER).on("click", function (e) {
              var navigationLink = $(e.target).parent(CHEESE_LIST_ITEM);
              if (navigationLink.length > 0) {
                var drupalSelector = navigationLink.attr(
                  "data-drupal-selector"
                );

                var $target = $(`[data-drupal-selector="${drupalSelector}"]`, CHEESE_MENUS);

                scrollTo(
                  document.getElementsByClassName(
                    CHEESE_MENUS.replace(".", "")
                  )[0],
                  $target.offset().top - HEADER_SIZE,
                  600
                );
              }
            });

            if ($active.length > 0) {
              $active
                .first()
                .parents("ul")
                .each(function (index, element) {
                  var $el = $(element);

                  if ($el.hasClass(CHEESE_LIST)) {
                    return false;
                  }

                  $el.toggleClass("open-parent");
                  $el.prev(CHEESE_LINK).toggleClass("is-opened");
                });

              return;
            }

            $(`${CHEESE_MENU}:first-of-type`).addClass(
              CHEESE_MENU_ACTIVE.replace(".", "")
            );
          }

          function initOnAjax() {
            BREAKPOINTS = true;
            if (typeof BREAKPOINTS === typeof undefined) {
              return;
            }

            if (BREAKPOINTS["from"] !== "0") {
              if (!window.matchMedia(BREAKPOINTS["from"]).matches) {
                ACTIVATEMENU = false;
              }
            }
            if (window.matchMedia(BREAKPOINTS["to"]).matches) {
              ACTIVATEMENU = false;
            }
            if (ACTIVATEMENU !== false) {
              $.ajax({
                url: "/cheeseburger-menu-render-request",
                dataType: "html",
                type: "post",
                data: {
                  block_id: BLOCK_ID,
                  current_route: CURRENT_ROUTE,
                },
                contentType: "application/x-www-form-urlencoded",
                success: function (data, textStatus, jQxhr) {
                  $(CHEESE_WRAPPER).html(data);
                  init();
                },
              });
            }
          }
        });
    },
  };
})(jQuery, Drupal, drupalSettings);
