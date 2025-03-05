/** @format */

function Welcome(props) {
  return (
    <>
      <h2>Welcome to React ,{props.name}</h2>
      <p>
        Your age is {props.age}, and your hobby is {props.hobby}.
      </p>
    </>
  );
}
export default Welcome;
