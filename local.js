// console.log("hello guys");

// const setAge = ()=>{
//     localStorage.setItem('age',31);
//     window.localStorage.setItem('age',31);
// }

const addProduct = () => {
  const productField = document.getElementById("product-name");
  const quantityField = document.getElementById("product-quantity");
  const product = productField.value;
  const quantity = quantityField.value;
  productField.value = "";
  quantityField.value = "";
  console.log(product, quantity);
};
