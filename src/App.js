/** @format */

// import { useState } from "react";
import ProductsLists from "./components/ProductsLists";
// import Greeting from "./components/Greeting";
// import Guest from "./components/Guest";
// import Lists from "./components/Lists";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // if (isLoggedIn) {
  //   element = <h1>Welcome back!</h1>;
  // } else {
  //   element = <h1>Please log in.</h1>;
  // }

  return (
    <div className="App">
      <ProductsLists />
    </div>
  );
}
export default App;
