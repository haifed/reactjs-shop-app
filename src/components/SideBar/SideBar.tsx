import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import ListGroup from "react-bootstrap/ListGroup";
import { Link, useNavigate } from "react-router-dom";
import Auth from "../../api/Auth.service";
import "./SideBar.css"

const SideBar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title> <h3>Fur-Shop</h3> </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
        <hr />
        <ListGroup className="mb-3 border-0">
          <ListGroup.Item className="border-0">
            <Link to="/home" className="nav-link link-name">
              Home
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="border-0">
            <Link to="/products" className="nav-link link-name">
              Products
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="border-0">
            <Link to="/about" className="nav-link link-name">
              About
            </Link>
          </ListGroup.Item>
<hr />
          {/* <ListGroup.Item><Link to="/to-do-list" className="nav-link">To-Do-List</Link></ListGroup.Item>
                    <ListGroup.Item><Link to="/users" className="nav-link">Users</Link></ListGroup.Item>
                    <ListGroup.Item><Link to="/login" className="nav-link">Login</Link></ListGroup.Item>
                    <ListGroup.Item><Link to="/primereact" className="nav-link">PrimeReact</Link></ListGroup.Item> */}
        </ListGroup>

        <div>
          {Auth.getCurrentUser() ? (
            <div>
              <button className="btn btn-danger" onClick={Auth.logout}>
                Logout
              </button>
            </div>
          ) : (
            <div>
              <button
                className="btn btn-primary"
                onClick={() => {
                  navigate("login");
                }}
              >
                Login
              </button>
            </div>
          )}
        </div>
      </Offcanvas.Body>
    </div>
  );
};

export default SideBar;
