import React, { FC, useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import { Link, useLocation } from 'react-router-dom';
import routes from '../constants';

export interface INavBar {}

const navbarBackgroundColor = { backgroundColor: '#eeeeff' };

const NavBar: FC<INavBar> = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { pathname } = useLocation();

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar style={navbarBackgroundColor} light expand="md">
            <NavbarBrand>Wfs Spy</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    {routes.map(({ path, name }) => (
                        <NavItem key={`nav-item-${name}`}>
                            <NavLink
                                tag={Link}
                                to={path}
                                active={path === pathname}>
                                {name}
                            </NavLink>
                        </NavItem>
                    ))}
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default NavBar;
