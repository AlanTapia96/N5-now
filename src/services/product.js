const productService = {};
const apiUrl = "./src/data/products.json";

productService.getProducts = async function () {
  return await fetch(`${apiUrl}`).then((res) => res.json());
};

export default productService;
