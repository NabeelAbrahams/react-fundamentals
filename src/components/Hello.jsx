import ReactList from "./ReactList";

function Hello() {
  const heading = "things you can do with react: ";

  return (
    <div>
      <h2>{heading}</h2>
      <ReactList />
    </div>
  );
}

export default Hello;
