import React, { FC } from 'react';
import { ITotalItems } from './models';
import { totalItems } from './constants';

const TotalItems: FC<ITotalItems> = ({ numberOfItems }) => {
    return (
        <div className="float-right mb-2">
            {totalItems} <b>{numberOfItems}</b>
        </div>
    );
};

export default TotalItems;
