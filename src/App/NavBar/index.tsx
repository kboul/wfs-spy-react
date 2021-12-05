import { useState } from 'react';
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

import DropDownItem from './DropDownItem';
import Logos from './Logos';
import { useAppContext, changeState, types } from '../../context';
import { mainRoutes } from '../routes';
import { appTitle, dropdownRoutes, resetStyle } from './constants';

export default function NavBar() {
    const { pathname } = useLocation();
    const { dispatch } = useAppContext();

    const [isOpen, setIsOpen] = useState(false);

    const handleNavbarToggle = () => setIsOpen(!isOpen);
    const handleStateReset = () => dispatch(changeState(types.stateReset, {}));

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
                            key={`dropdown-item-${name}`}
                        >
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
                                        active={path === pathname}
                                    >
                                        {name}
                                    </NavLink>
                                </NavItem>
                            )
                    )}
                    <NavItem>
                        <NavLink onClick={handleStateReset} style={resetStyle}>
                            Reset
                        </NavLink>
                    </NavItem>
                </Nav>
                <Logos />
            </Collapse>
        </Navbar>
    );
}
