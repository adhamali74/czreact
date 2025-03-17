/** @format */

import { useState } from "react";

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
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>}
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
