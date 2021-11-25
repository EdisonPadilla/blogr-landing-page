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

productOption.addEventListener("click", () => {
  productArrow.classList.toggle("rotate-arrow");
  productOptionsList.classList.toggle("show-product");
});

companyOption.addEventListener("click", () => {
  companyArrow.classList.toggle("rotate-arrow");
  companyOptionsList.classList.toggle("show-company");
});

connectOption.addEventListener("click", () => {
  connectArrow.classList.toggle("rotate-arrow");
  connectOptionsList.classList.toggle("show-connect");
});
