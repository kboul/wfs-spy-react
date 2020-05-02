import React, { FC, useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu
} from 'reactstrap';
import { Link, useLocation } from 'react-router-dom';
import Logos from './Logos';
import DropDownItem from './DropDownItem';
import { mainRoutes } from '../routes';
import { INavBar } from './models';
import dropdownRoutes from './constants';

const NavBar: FC<INavBar> = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { pathname } = useLocation();
    const reset = { cursor: 'pointer' };
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar className="navbar-dark bg-dark" expand="md">
            <NavbarBrand tag={Link} to={mainRoutes[0].path}>
                WFS Spy
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    {dropdownRoutes.map(({ name, routes }) => (
                        <UncontrolledDropdown
                            nav
                            inNavbar
                            key={`dropdown-item-${name}`}>
                            <DropdownToggle nav caret>
                                {name}
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropDownItem routes={routes} />
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    ))}
                    {mainRoutes.map(
                        ({ path, name }) =>
                            name && (
                                <NavItem key={`nav-item-${name}`}>
                                    <NavLink
                                        tag={Link}
                                        to={path}
                                        active={path === pathname}>
                                        {name}
                                    </NavLink>
                                </NavItem>
                            )
                    )}
                    <NavItem>
                        <NavLink style={reset}>Reset</NavLink>
                    </NavItem>
                </Nav>
                <Logos />
            </Collapse>
        </Navbar>
    );
};

export default NavBar;
