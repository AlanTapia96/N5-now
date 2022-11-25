import products from "./products.json";
const productService = {};

const apiUrl = "";

// productService.getProducts = async function () {
//   return await fetch(`${apiUrl}`)
//     .then((res) => res.json())
// };

productService.getProducts = () =>
  new Promise((resolve, reject) => {
    resolve(products);
  }).then(res => res.products);

export default productService;
