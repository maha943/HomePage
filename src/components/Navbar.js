import React , {Component } from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";
export default class Navbar extends Component {
render () {
    return(
       
        
        <nav className="navbar navbar-expand-sm navbar-light nav " id="navbar">
      <div className="container">
        <Link className="navbar-brand a " to="/">
            <img className="cut-img"  src="./images/cr2bXLn.png"  alt="logo"/> </Link>
        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav ml-auto ">
            <li className="nav-item active px-4">
              <Link className="nav-link-hover pages a" to="/" id="green">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item active px-4">
              <Link className="nav-link-hover pages a" to="/service" id="scrollColor">Our services  <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item active px-4">
              <Link className="nav-link-hover pages a" to="/portfolio" id="scrollColor">portfolio <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item active px-4">
              <Link className="nav-link-hover pages a" to="/contact" id="scrollColor">Contact <span className="sr-only">(current)</span></Link>
            </li>
            


          </ul>

        </div>




      </div>
      
    </nav>
    
  
 
    )
}

}