import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./NavBar.css"
import SideBar from "../SideNav/SideBar";
// import SideBar from "../side-bar/side-nav";


const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light px-3 d-flex justify-content-between align-items-center"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <div className="d-flex justify-content-between">
          <Link to="/home" className="nav-link">
            <h3>Navbar</h3>
          </Link>

          <button
            className="btn btn-light  mx-2" onClick={handleShow}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div
          className="collapse navbar-collapse d-none d-xl-inline"
          id="navbarSupportedContent"
        >
          <div className="d-flex justify-content-between align-items-center">
            <ul className="navbar-nav mr-auto ">
              <li className="nav-item active">
                <Link to="/home" className="nav-link">Home</Link>
              </li>
              <li className="nav-item active">
                <Link to="/products" className="nav-link">Products</Link>
              </li>
              <li className="nav-item active">
                <Link to="/about" className="nav-link">About</Link>
              </li>
              {/* <li className="nav-item">
                <Link to="/to-do-list" className="nav-link">To do list</Link>
              </li>
              <li className="nav-item">
                <Link to="/users" className="nav-link">Users</Link>
              </li>
              <li className="nav-item">
                <Link to="/posts" className="nav-link">Posts</Link>
              </li> */}
            </ul>
            {/* <div>
              <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div> */}
          </div>
        </div>

        <div className="search">
          <form
            className="input-group"
            action="https://www.google.com/search"
            method="GET"
          // style={{width:'200px'}}
          >
            <input
              className="form-control"
              id="fname"
              name="q"
              placeholder="Search ..."
            />
            <button type="submit" className="btn btn-light">
              Search
            </button>
          </form>
        </div>
      </nav>

      {/* side-nav */}
      <Offcanvas show={show} onHide={handleClose}  responsive="lg">
        {/* <Offcanvas.Header closeButton>
          <Offcanvas.Title>SideNav</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Offcanvas.Body> */}
        <SideBar/>
      </Offcanvas>
    </div>


  );
};

export default NavBar;
