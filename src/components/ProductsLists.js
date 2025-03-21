/** @format */
import ProductsData from "../ProductsData";
import Products from "./Products";

function ProductsLists() {
  console.log(ProductsData);
  let products = ProductsData.map((product) => {
    return <Products product={product} key={product.id}></Products>;
  });

  return <div>{products}</div>;
}

export default ProductsLists;
