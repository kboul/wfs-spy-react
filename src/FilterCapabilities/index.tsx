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

            <Panel header={consts.compOperHeader} text={consts.compOperDescr} />
            <Panel header={consts.spatOperHeader} text={consts.spatOperDescr} />
            <Panel header={consts.geomOperHeader} text={consts.geomOperDescr} />
            <Panel
                header={consts.tempOperandsHeader}
                text={consts.tempOperandsDescr}
            />
            <Panel header={consts.tempOperHeader} text={consts.tempOperDescr} />
            <Panel header={consts.funcHeader} text={consts.funcDescr} />
        </Col>
    );
};

export default FilterCapabilities;
