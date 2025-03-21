/** @format */

function Products(props) {
  return (
    <div className="product" key={props.product.id}>
      <h2>
        {props.product.id}: {props.product.title} <br />
      </h2>
      <img src={props.product.image} alt={props.product.title} />
      <p>{props.product.description}</p>
    </div>
  );
}
export default Products;
