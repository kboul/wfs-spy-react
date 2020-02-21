import React, { FC } from 'react';
import { Col } from 'reactstrap';
import Panel from '../Panel';
import IFilterCapabilities from './model';
import { defaultProps } from './constants';

const FilterCapabilities: FC<IFilterCapabilities> = ({
    header,
    descr,
    compOperHeader,
    compOperDescr,
    spatOperHeader,
    spatOperDescr,
    geomOperHeader,
    geomOperDescr,
    tempOperandsHeader,
    tempOperandsDescr,
    tempOperHeader,
    tempOperDescr,
    funcHeader,
    funcDescr
}) => {
    return (
        <Col md={{ size: 8, offset: 2 }} className="mt-4">
            <h3>{header}</h3>
            <p>{descr}</p>

            <Panel header={compOperHeader} text={compOperDescr} />
            <Panel header={spatOperHeader} text={spatOperDescr} />
            <Panel header={geomOperHeader} text={geomOperDescr} />
            <Panel header={tempOperandsHeader} text={tempOperandsDescr} />
            <Panel header={tempOperHeader} text={tempOperDescr} />
            <Panel header={funcHeader} text={funcDescr} />
        </Col>
    );
};

FilterCapabilities.defaultProps = defaultProps;

export default FilterCapabilities;
