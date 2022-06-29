import React, { Component } from 'react';
import { NavLink, Navbar, Nav, NavItem, NavbarBrand } from 'reactstrap';

export default class NavbarComponent extends Component {
    render() {
        return (
            <div>
            <Navbar className = 'navbar'>
                <Nav navbar>
                <div className = 'left'>
                    <NavbarBrand to = '/'>Logo</NavbarBrand>
                </div>
                <div className = 'center'>
                    <NavItem>
                        <NavLink to = '/'>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to = '/explore'>Explore</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to = '/career'>Career</NavLink>
                    </NavItem>
                </div>
                <div className = 'right'>
                    <NavItem>
                        <NavLink to = '/contact'>Contact Us</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to = '/login'>Login</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to = '/profile'>Profile</NavLink>
                    </NavItem>
                </div>
                </Nav>
            </Navbar>
            </div>
        );
    }
}