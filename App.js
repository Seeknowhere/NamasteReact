const heading = React.createElement(
    "h1", 
    {id: "heading"}, 
    "Hello WOrld from React"
);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("header"));

root.render(heading);