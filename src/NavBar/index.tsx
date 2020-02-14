import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import routes from './constants';

export interface NavBarProps {}

const NavBar: React.SFC<NavBarProps> = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand>Wfs Spy</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    {routes.map(({ url, name }) => (
                        <NavItem key={`route-${name}`}>
                            <NavLink href={url}>{name}</NavLink>
                        </NavItem>
                    ))}
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default NavBar;
