import React, { FC } from 'react';
import { Col } from 'reactstrap';
import Panel from '../Panel';
import IAttrNamesTypes from './model';
import defaultProps from './constants';

const AttrNamesTypes: FC<IAttrNamesTypes> = ({
    header,
    descr,
    attrNamesTypesHeader,
    attrNamesTypesDescr
}) => {
    return (
        <Col md={{ size: 8, offset: 2 }} className="mt-4">
            <h3>{header}</h3>
            <p>{descr}</p>

            <Panel header={attrNamesTypesHeader} text={attrNamesTypesDescr} />
        </Col>
    );
};

AttrNamesTypes.defaultProps = defaultProps;

export default AttrNamesTypes;
