import React from 'react';

import TotalItemsProps from './model';

const totalItems: string = 'Total Items:';

export default function TotalItems({ numberOfItems }: TotalItemsProps) {
    return (
        <div className="float-right mb-2">
            {totalItems} <b>{numberOfItems}</b>
        </div>
    );
}
