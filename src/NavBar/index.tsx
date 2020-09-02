import React, { FC, useState, useContext } from 'react';
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

import Context from '../context';
import { IContext } from '../context/models';
import Logos from './Logos';
import DropDownItem from './DropDownItem';
import { resetState } from '../context/actions';
import { mainRoutes } from '../routes';
import { appTitle, dropdownRoutes } from './constants';

const NavBar: FC = () => {
    const { pathname } = useLocation();
    const { dispatch }: IContext = useContext(Context);

    const [isOpen, setIsOpen] = useState(false);

    const resetStyle = { cursor: 'pointer' };

    const handleNavbarToggle = () => setIsOpen(!isOpen);
    const handleStateReset = () => dispatch(resetState());

    return (
        <Navbar className="navbar-dark bg-dark" expand="md" sticky="top">
            <NavbarBrand tag={Link} to={mainRoutes[0].path}>
                {appTitle}
            </NavbarBrand>
            <NavbarToggler onClick={handleNavbarToggle} />
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
                        <NavLink style={resetStyle} onClick={handleStateReset}>
                            Reset
                        </NavLink>
                    </NavItem>
                </Nav>
                <Logos />
            </Collapse>
        </Navbar>
    );
};

export default NavBar;
