import React, { FC } from 'react';
import { Col } from 'reactstrap';
import Panel from '../Panel';
import IAttrNamesTypes from './model';
import consts from './constants';

const AttrNamesTypes: FC<IAttrNamesTypes> = () => {
    return (
        <Col md={{ size: 8, offset: 2 }} className="mt-4">
            <h3>{consts.header}</h3>
            <p>{consts.descr}</p>

            <Panel
                header={consts.attrNamesTypesHeader}
                text={consts.attrNamesTypesDescr}
            />
        </Col>
    );
};

export default AttrNamesTypes;
