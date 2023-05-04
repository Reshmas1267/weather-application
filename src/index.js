import ReactDOM   from "react-dom";

//import App from "./App.js";
//import Greet from "./coponents/Karthik.js";
//import App1 from "./Kar.js";
//import Form from "./form";
//import Appa from "./Appa";
import Wheatherapp from "./project/Wheathermain";

ReactDOM.render(
      <div>
          <Wheatherapp></Wheatherapp>
      </div>,
      document.getElementById("root"))

//ReactDOM it is a model
//"react-dom"-defedency . it is mentioned in package.jasonfile
//render-required two arguement. to render the html document
//1)component eg:<app/> fetch within the html page
// 2) where we have to print it