const d = document;
const productOption = d.querySelector(".product-option");
const companyOption = d.querySelector(".company-option");
const connectOption = d.querySelector(".connect-option");
const productArrow = d.querySelector(".product-arrow");
const companyArrow = d.querySelector(".company-arrow");
const connectArrow = d.querySelector(".connect-arrow");
const productOptionsList = d.querySelector(".product-options-list");
const companyOptionsList = d.querySelector(".company-options-list");
const connectOptionsList = d.querySelector(".connect-options-list");
const menuButton = d.querySelector(".ham-btn");
const menu = d.querySelector(".nav-menus-box");
const bars = d.querySelectorAll(".ham-btn span");

productOption.addEventListener("click", () => {
  productArrow.classList.toggle("rotate-arrow");
  productOptionsList.classList.toggle("show-list-options");
});

companyOption.addEventListener("click", () => {
  companyArrow.classList.toggle("rotate-arrow");
  companyOptionsList.classList.toggle("show-list-options");
});

connectOption.addEventListener("click", () => {
  connectArrow.classList.toggle("rotate-arrow");
  connectOptionsList.classList.toggle("show-list-options");
});

/*menu functionality on mobile device*/

menuButton.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
  bars.forEach((child) => {
    child.classList.toggle("animation");
  });
});
