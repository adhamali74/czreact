/** @format */
import Button from "./Button";
function Product(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <p>{props.price}</p>
      <Button buttonTitle={props.buttonTitle} />
    </div>
  );
}
export default Product;
