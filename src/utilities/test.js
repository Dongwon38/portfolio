function testFunction() {
  console.log("test.js works");
  const testfile = document.createElement("script");
  testfile.src = "./src/utilities/clickanimation.js";
  testfile.async = true;

  document.body.appendChild(testfile);
}

const domContainer = document.querySelector("#root");
ReactDOM.render(React.createElement(testFunction), domContainer);
