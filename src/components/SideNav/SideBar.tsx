import React, { useState } from "react";
import Offcanvas from 'react-bootstrap/Offcanvas';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";


const SideBar = () => {

    return (
        <div>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>SideNav</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <hr />
                <ListGroup>
                    <ListGroup.Item><Link to="/home" className="nav-link">Home</Link></ListGroup.Item>
                    <ListGroup.Item><Link to="/products" className="nav-link">Products</Link></ListGroup.Item>
                    <ListGroup.Item><Link to="/about" className="nav-link">About</Link></ListGroup.Item>
                    {/* <ListGroup.Item><Link to="/to-do-list" className="nav-link">To-Do-List</Link></ListGroup.Item>
                    <ListGroup.Item><Link to="/users" className="nav-link">Users</Link></ListGroup.Item>
                    <ListGroup.Item><Link to="/login" className="nav-link">Login</Link></ListGroup.Item>
                    <ListGroup.Item><Link to="/primereact" className="nav-link">PrimeReact</Link></ListGroup.Item> */}
                </ListGroup>
            </Offcanvas.Body>
        </div>
    );
};

export default SideBar;