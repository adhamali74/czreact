/** @format */

function Input(props) {
  return (
    <>
      <label>{props.label}</label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        onChange={(event) => {
          console.log(event.target.value);
        }}
      />
      {props.btnName && <button>{props.btnName}</button>}{" "}
    </>
  );
}
export default Input;
