/** @format */

import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let element;
  // if (isLoggedIn) {
  //   element = <h1>Welcome back!</h1>;
  // } else {
  //   element = <h1>Please log in.</h1>;
  // }

  isLoggedIn
    ? (element = <h1>Welcome back!</h1>)
    : (element = <h1>Please log in.</h1>);
  return (
    <div className="App">
      <button
        onClick={() => {
          setIsLoggedIn(true);
        }}
      >
        Login
      </button>
      {element}
      <br></br>
      <button
        onClick={() => {
          setIsLoggedIn(false);
        }}
      >
        logout
      </button>
    </div>
  );
}
export default App;
