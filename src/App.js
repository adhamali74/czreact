/** @format */
import Greeting from "./components/Greeting";
import Welcome from "./components/Welcome";
import Product from "./components/Product";
function App() {
  return (
    <>
      <div className="App"></div>
      <Welcome name="Adham" age="28" hobby="football" />
      <Product
        name="Nike Shoes"
        description="High-performance shoes"
        price="1150"
      />
      <Product
        name="Adidas Shoes"
        description="Medium-performance shoes"
        price="250"
      />
      <Product
        name="Puma Shoes"
        description="Low-performance shoes"
        price="150"
      />
    </>
  );
}
export default App;
