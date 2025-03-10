/** @format */

import React from "react";

class Welcome extends React.Component {
  state = {
    firstName: "Adham",
    lastName: "Hussien",
  };

  render() {
    return (
      <div>
        <h1>
          This is created using state by {this.state.firstName}{" "}
          {this.state.lastName}
        </h1>
        <button
          onClick={() => {
            this.setState({
              firstName: "Adhaaaaaaam",
              lastName: "Hussieeeeeen",
            });
          }}
        >
          {" "}
          Change the Names{" "}
        </button>
      </div>
    );
  }
}

export default Welcome;
