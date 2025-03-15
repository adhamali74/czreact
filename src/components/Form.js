/** @format */
import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const nameHandler = (name) => {
    setName(name);
  };
  const passwordHandler = (password) => {
    setPassword(password);
  };
  const emailHandler = (email) => {
    setEmail(email);
  };
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log("Form submitted");
          console.log({
            name,
            password,
            email,
          });
        }}
      >
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(event) => {
            nameHandler(event.target.value);
          }}
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          onChange={(event) => {
            emailHandler(event.target.value);
          }}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          onChange={(event) => {
            passwordHandler(event.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </>
  );
}
export default Form;
