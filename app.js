// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector("form");
const product = document.getElementById("product");
const qty = document.getElementById("qty");
const ul = document.querySelector("#list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const lis = document.createElement("li");
  lis.append(`${e.value} ${e.value}`);
  ul.appendChild(lis);
  product.value = "";
  qty.value = "";
});
