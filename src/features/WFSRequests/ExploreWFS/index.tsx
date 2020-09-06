import React from 'react';
import { Col, Form } from 'reactstrap';

import Url from './Url';
import Version from './Version';
import Request from './Request';
import Service from './Service';
import Typename from './Typename';
import ValueReference from './ValueReference';
import SortBy from './SortBy';
import WFSRequest from './WFSRequest';
import WFSResponse from './WFSResponse';
import consts from './constants';
import sharedStyles from '../shared.module.sass';

const containerStyle = {
    backgroundColor: 'rgb(211, 211, 211)'
};

const ExploreWFS = () => {
    return (
        <Col md="6" style={containerStyle}>
            <h4 className={sharedStyles.header}>{consts.header}</h4>
            <Form noValidate>
                <Url />
                <Version />
                <Request />
                <Service />
                <Typename />
                <ValueReference />
                <SortBy />
                <WFSRequest />
                <WFSResponse />
            </Form>
        </Col>
    );
};

export default ExploreWFS;
