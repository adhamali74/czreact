/** @format */

function Button(props) {
  return (
    <button
      className="react-btn"
      onClick={() => {
        alert("Button clicked");
        console.log("Button clicked");
      }}
    >
      {props.buttonTitle}
    </button>
  );
}
export default Button;
