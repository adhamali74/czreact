/** @format */
import React, { useState } from "react";

function Greeting(props) {
  let [counter, setCounter] = useState(0);
  return (
    <>
      <h2>Guten Morgen ,{props.name}</h2>
      <h3>
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          +
        </button>
      </h3>
      <h6> {counter}</h6>
    </>
  );
}
export default Greeting;
