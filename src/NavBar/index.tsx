import React, { FC, useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';
import { Link, useLocation } from 'react-router-dom';
import Logos from './Logos';
import routes from '../constants';

interface INavBar {}

const navbarBackgroundColor = { backgroundColor: '#eeeeff' };

const NavBar: FC<INavBar> = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { pathname } = useLocation();

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar style={navbarBackgroundColor} light expand="md">
            <NavbarBrand>WFS Spy</NavbarBrand>
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
                <NavbarText>
                    <Logos />
                </NavbarText>
            </Collapse>
        </Navbar>
    );
};

export default NavBar;
