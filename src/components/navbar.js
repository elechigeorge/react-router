import React, { useState } from 'react'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <div className="container">
                    <NavbarBrand href="/">Elechi Pro</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>

                            <NavItem>
                                <NavLink href="https://github.com/elechigeorge" target="_blank">GitHub</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/posts">Posts</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/about">About</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </div>
    );
}

export default NavBar;