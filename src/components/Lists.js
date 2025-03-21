/** @format */

function Lists() {
  const arr = [
    { id: 1, name: "html" },
    { id: 2, name: "CSS" },
    { id: 3, name: "JavaScript" },
  ];
  let li = arr.map((x, index) => <li keys={x.id}>{x.name}</li>);
  return <ul>{li}</ul>;
}

export default Lists;
