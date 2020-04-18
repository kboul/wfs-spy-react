import React, { FC } from 'react';
import { Col } from 'reactstrap';
import Panel from '../Panel';
import IFilterCapabilities from './model';
import consts from './constants';

const FilterCapabilities: FC<IFilterCapabilities> = () => {
    return (
        <Col md={{ size: 8, offset: 2 }} className="mt-4">
            <h3>{consts.header}</h3>
            <p>{consts.descr}</p>

            <Panel
                header={consts.compOperHeader}
                title={consts.compOperDescr}
                content=""
            />
            <Panel
                header={consts.spatOperHeader}
                title={consts.spatOperDescr}
                content=""
            />
            <Panel
                header={consts.geomOperHeader}
                title={consts.geomOperDescr}
                content=""
            />
            <Panel
                header={consts.tempOperandsHeader}
                title={consts.tempOperandsDescr}
                content=""
            />
            <Panel
                header={consts.tempOperHeader}
                title={consts.tempOperDescr}
                content=""
            />
            <Panel
                header={consts.funcHeader}
                title={consts.funcDescr}
                content=""
            />
        </Col>
    );
};

export default FilterCapabilities;
