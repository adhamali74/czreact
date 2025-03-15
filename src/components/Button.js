/** @format */

function Button(props) {
  const btnHandler = () => {
    console.log("Button clicked");
  };
  const mouseLeaveHandler = () => {
    console.log("Mouse left the button");
  };
  return (
    <button
      className="react-btn"
      onMouseEnter={btnHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      {props.buttonTitle}
      Click Me
    </button>
  );
}
export default Button;
