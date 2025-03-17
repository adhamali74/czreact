/** @format */

import { useState } from "react";
import Greeting from "./components/Greeting";
import Guest from "./components/Guest";
import Lists from "./components/Lists";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // if (isLoggedIn) {
  //   element = <h1>Welcome back!</h1>;
  // } else {
  //   element = <h1>Please log in.</h1>;
  // }

  return (
    <div className="App">
      <button
        onClick={() => {
          setIsLoggedIn(true);
        }}
      >
        Login
      </button>
      {isLoggedIn ? <Greeting name="Adham" /> : <Guest />}
      <br></br>
      <button
        onClick={() => {
          setIsLoggedIn(false);
        }}
      >
        logout
      </button>
      {<Lists />}
    </div>
  );
}
export default App;
