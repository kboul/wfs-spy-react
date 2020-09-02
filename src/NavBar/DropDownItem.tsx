import React, { FC } from 'react';
import { DropdownItem } from 'reactstrap';
import { Link, useLocation } from 'react-router-dom';

import { IDropDownItem } from './models';

const DropDownItem: FC<IDropDownItem> = ({ routes }: IDropDownItem) => {
    const { pathname } = useLocation();
    return (
        <>
            {routes.map(({ path, name }) => (
                <DropdownItem
                    key={`drop-down-item-${name}`}
                    tag={Link}
                    to={path}
                    active={path === pathname}>
                    {name}
                </DropdownItem>
            ))}
        </>
    );
};

export default DropDownItem;
