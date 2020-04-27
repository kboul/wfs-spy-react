import React, { FC } from 'react';
import { totalItems } from './constants';

interface ITotalItems {
    numberOfItems: number;
}

const TotalItems: FC<ITotalItems> = ({ numberOfItems }) => {
    return (
        <div className="float-right mb-2">
            {totalItems} <b>{numberOfItems}</b>
        </div>
    );
};

export default TotalItems;
