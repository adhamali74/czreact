/** @format */
import Greeting from "./components/Greeting";
import Welcome from "./components/Welcome";
import Product from "./components/Product";
// import Button from "./components/Button";
import Input from "./components/Input";
import Form from "./components/Form";
function App() {
  return (
    <div className="App">
      {/* /* <Greeting />
      <Welcome name="Adham" age="28" hobby="football" />
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
      {/* <Button></Button> */}
      {/* <Input label="Name" type="text" placeholder="Type your Name"></Input>
      <Input
        label="Password"
        type="password"
        placeholder="Insert your password"
        btnName="Submit"
      // ></Input> */
      }{" "}
    
      <Form></Form>
    </div>
  );
}
export default App;
