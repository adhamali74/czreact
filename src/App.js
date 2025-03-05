/** @format */
import Greeting from "./components/Greeting";
import Welcome from "./components/Welcome";
import Product from "./components/Product";
function App() {
  return (
    <>
      <div className="App"></div>
      <Greeting name="Adhaam" />
      <Welcome name="Adham" age="28" hobby="football" />
      <Welcome name="Hussien" age="35" hobby="soccer" />
      <Product
        name="Nike Shoes"
        description="High-performance shoes"
        price="1150"
        buttonTitle="Add to Cart"
      />
      <Product
        name="Adidas Shoes"
        description="Medium-performance shoes"
        price="250"
        buttonTitle="Buy Now"
      />
      <Product
        name="Puma Shoes"
        description="Low-performance shoes"
        price="150"
        buttonTitle="Add to Basket"
      />
    </>
  );
}
export default App;
