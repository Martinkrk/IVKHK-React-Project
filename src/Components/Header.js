import React, {Component} from 'react';
import logo from "../logo.svg"
import {Button, Container, Form, FormControl, Nav, Navbar, NavbarBrand, NavLink} from "react-bootstrap";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "../Pages/Home";
import Contacts from "../Pages/Contacts";
import Blog from "../Pages/Blog";
import About from "../Pages/About";

class Header extends Component {
    render() {
        return (
            <>
            <Navbar sticky={"top"} collapseOnSelect expand={"md"} bg={"dark"} variant={"dark"}>
                <Container>
                    <NavbarBrand href={"/"}>
                        <img
                            src={logo}
                            height={30}
                            className={"d-inline-block align-top"}
                            alt={logo}
                        />
                    </NavbarBrand>
                    <NavbarToggle aria-controls={"responsive-navbar-nav"} />
                    <NavbarCollapse id={"responsive-navbar-nav"}>
                        <Nav className={"me-auto"}>
                            <NavLink href={"/"}>Home</NavLink>
                            <NavLink href={"/about"}>About</NavLink>
                            <NavLink href={"/contacts"}>Contacts</NavLink>
                            <NavLink href={"/blog"}>Blog</NavLink>
                        </Nav>
                        <Form className={"d-flex"}>
                            <FormControl type={"text"} placeholder={"search"} className={"me-sm-2"}/>
                            <Button variant={"outline-info"}>Search</Button>
                        </Form>
                    </NavbarCollapse>
                </Container>
            </Navbar>
            <Router>
                <Routes>
                    <Route exact path={"/"} element={<Home/>}/>
                    <Route exact path={"/about"} element={<About/>}/>
                    <Route exact path={"/contacts"} element={<Contacts/>}/>
                    <Route exact path={"/blog"} element={<Blog/>}/>
                </Routes>
            </Router>
            </>
        );
    }
}

export default Header;