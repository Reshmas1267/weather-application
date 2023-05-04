// ROUTERS --> link 1 component to another component
// npm i react-router-dom
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import {BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import "./Appa.css"
function Appa(){
  return(
    <Router>
      <div className="navbar">
      <div className="logo">
        Besant Technology
      </div>
      <ul>
        <input type="checkbox" id="check"/>
        <label for="check" className="hamburger">&#9776;</label>
        <div className="menu">
             <li>
              <a href="/">
                <Link to="/home">Home</Link>
              </a>
             </li>
             <li>
              <a href="/">
                <Link to="/about">About</Link>
              </a>
             </li>
             <li>
              <a href="/">
                <Link to="/contact">
                Contact
                </Link>
              </a>
             </li>
             <li>
              <a href="/">
                <Link to="/services">Services</Link>
              </a>
             </li>
        </div>
      </ul>
      
    </div>
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/services" element={<Services/>}/>
    </Routes>
    </Router>
  )
}
export default Appa;