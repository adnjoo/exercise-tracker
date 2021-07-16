import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap"

export default class Mynavbar extends Component {

    render() {
        return (
           <Navbar bg='light' expand='lg'>
               <Navbar.Brand href='/'>ExcerTracker</Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                <Nav.Link href="/">Exercises</Nav.Link>
                <Nav.Link href="/create">Create Exercise Log</Nav.Link>
                <Nav.Link href="/user">Create User</Nav.Link>
               </Navbar.Collapse>
           </Navbar>
        )
    }
}