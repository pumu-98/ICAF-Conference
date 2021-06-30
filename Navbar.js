import React from "react";
//import logo from "../logo.jpg";
import {Link} from "react-router-dom";
import logo from '../../logo.png';


//React fontawesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top ">
  <div className="container-fluid">
      <a className="navbar-brand" href="#"> <img src={logo} class="d-block" alt="..."  style={{ width: "120px" }}/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <FontAwesomeIcon icon={faBars} style={{ color:"#fff"}} />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto ">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
        <Link  className="nav-link " to="/post-list"> Upcoming Conferences</Link >
        </li>
        <li className="nav-item">
        <Link  className="nav-link " to="/add-post"> Add New Conference</Link >
        </li>
        <li className="nav-item">
          <div class="dropdown">
            <button class="dropbtn">About Me</button>
            <div class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </li>
        <li className="nav-item">
        <Link  className="nav-link " to="#"> Contact</Link >
        </li>
        
      </ul>
    
    </div>
  </div>
</nav>
    )
}


export default Navbar
