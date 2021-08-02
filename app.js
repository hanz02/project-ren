const mobile_menu = document.querySelector("#mobile-menu");
const menu_links = document.querySelector(".navbar__menu");
const nav_logo = document.querySelector("#navbar__logo");

//~ DISPLAY MOBILE MENU
const displayMobileMenu = () => {
  mobile_menu.classList.toggle("is-active");
  menu_links.classList.toggle("active");
};

mobile_menu.addEventListener("click", displayMobileMenu);

//~ SHOW ACTIVE MENU WHEN SCROLLING

const highlightMenu = () => {
  const element = document.querySelector(".highlight");
  const home_menu = document.querySelector("#home-page");
  const about_menu = document.querySelector("#about-page");
  const service_manu = document.querySelector("#services-page");

  let scroll_pos = window.scrollY;

  //~ ADD 'HIGHLIGHT' CLASS TO MY MENU ITEMS
  if (window.innerWidth > 960 && scroll_pos < 600) {
    console.log("object");
    home_menu.classList.add("highlight");
    about_menu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scroll_pos < 1400) {
    about_menu.classList.add("highlight");
    home_menu.classList.remove("highlight");
    service_manu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scroll_pos < 2345) {
    service_manu.classList.add("highlight");
    about_menu.classList.remove("highlight");
    return;
  }

  if ((element && window.innerWidth > 960 && scroll_pos < 600) || element) {
    element.classList.remove("highlight");
  }
};

window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu);

//~CLOSE MOBILE NAV BAR WHEN CLICKED ON NAV ITEM
const closeMobileMenu = () => {
  const menu_bars = document.querySelector(".is-active");

  if (window.innerWidth <= 768 && menu_bars) {
    mobile_menu.classList.toggle("is-active");
    menu_links.classList.remove("active");
  }
};

menu_links.addEventListener("click", closeMobileMenu);
nav_logo.addEventListener("click", closeMobileMenu);
