import React from 'react';
import { Col, Form } from 'reactstrap';

import Url from './Url';
import Version from './Version';
import Request from './Request';
import Service from './Service';
import Typename from './Typename';
import ValueReference from './ValueReference';
import SortBy from './SortBy';
import HiddenField from './HiddenField';
import WFSRequest from './WFSRequest';
import WFSResponse from './WFSResponse';
import { useAppContext } from '../../../context';
import { propIsBetween } from '../../../shared/constants';
import sharedStyles from '../shared.module.sass';

const containerStyle = {
    backgroundColor: 'rgb(211, 211, 211)'
};

const consts = { header: 'Service and Feature Description' };

const ExploreWFS = () => {
    const { state } = useAppContext();
    const { showNonNumericValue, showNumericValue, compOper } = state;

    const showFilterValue = showNonNumericValue || showNumericValue;

    const isPropBetween = compOper === propIsBetween;

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
                <HiddenField condition={showFilterValue} displayTimes={1} />
                <HiddenField condition={isPropBetween} displayTimes={2} />
                <WFSRequest />
                <WFSResponse />
            </Form>
        </Col>
    );
};

export default ExploreWFS;
