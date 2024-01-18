// const heading = React.createElement(
//   "h1",
//   {
//     id: "heading",
//     xyz: "abc",
//   },
//   "Hello World from React"
// ); //the object is for giving attributes to the tag

//React Element (OBJECT) => HTML )Browser Understands
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "Im an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "Im an h2 tag"),
  ]),
]);
console.log(parent); //object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); //converts the object to the H1 tag
