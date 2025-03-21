/** @format */
import ProductsData from "../ProductsData";

function ProductsLists() {
  console.log(ProductsData);
  let products = ProductsData.map((x, index) => {
    return (
      <div className="product" key={x.id}>
        <h2>
          {x.id}: {x.title} <br />
        </h2>
      </div>
    );
  });

  return <div>{products}</div>;
}

export default ProductsLists;
