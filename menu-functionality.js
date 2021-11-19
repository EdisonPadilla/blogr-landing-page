const productOption = document.querySelector("#product-option");
const companyOption = document.querySelector("#company-option");
const connectOption = document.querySelector("#connect-option");
const productArrow = document.querySelector("#product-arrow");
const companyArrow = document.querySelector("#company-arrow");
const connectArrow = document.querySelector("#connect-arrow");
productOption.addEventListener("click", () => {
  productArrow.classList.toggle("rotate-arrow");
});

companyOption.addEventListener("click", () => {
  companyArrow.classList.toggle("rotate-arrow");
});

connectOption.addEventListener("click", () => {
  connectArrow.classList.toggle("rotate-arrow");
});
