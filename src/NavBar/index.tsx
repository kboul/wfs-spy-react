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
import Logos from './Logos';
import DropDownItem from './DropDownItem';
import { resetState } from '../context/actions';
import { mainRoutes } from '../routes';
import { appTitle, dropdownRoutes } from './constants';

const NavBar: FC = () => {
    const { dispatch } = useContext(Context);

    const [isOpen, setIsOpen] = useState(false);
    const { pathname } = useLocation();

    const resetStyle = { cursor: 'pointer' };

    const toggleNavbar = () => setIsOpen(!isOpen);
    const doResetState = () => dispatch(resetState());

    return (
        <Navbar className="navbar-dark bg-dark" expand="md" sticky="top">
            <NavbarBrand tag={Link} to={mainRoutes[0].path}>
                {appTitle}
            </NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} />
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
                        <NavLink style={resetStyle} onClick={doResetState}>
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
