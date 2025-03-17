/** @format */

function Lists() {
  const arr = ["html", "CSS", "JavaScript", "React", "Node"];

  return (
    <ul>
      {arr.map((x) => (
        <li>{x}</li>
      ))}
    </ul>
  );
}

export default Lists;
