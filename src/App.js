/** @format */

import logo from "./logo.svg";
import "./App.css";

function App() {
  function greeting(name) {
    if (name) {
      return <h2> Hello, {name}</h2>;
    } else {
      return <h2>Hello friend </h2>;
    }
  }
  const myName = "";
  const myElement = <h2> Hello , {myName}</h2>;
  return (
    <div className="App">
      {greeting(myName)},{myElement}
    </div>
  );
}

export default App;
