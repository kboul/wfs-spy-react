import React, { FC } from 'react';
import { Col } from 'reactstrap';
import Panel from '../../shared/Panel';
import AttributeDetails from './AttributeDetails';
import consts from './constants';

const AttrNamesTypes: FC = () => {
    return (
        <Col md={{ size: 8, offset: 2 }} className="mt-4">
            <h3>{consts.header}</h3>
            <p>{consts.descr}</p>

            <Panel
                header={consts.panelHeader}
                title={consts.panelDescr}
                content={<AttributeDetails />}
            />
        </Col>
    );
};

export default AttrNamesTypes;
