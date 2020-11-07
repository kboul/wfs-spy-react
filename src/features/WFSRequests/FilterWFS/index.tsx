import React from 'react';
import { Col, Form } from 'reactstrap';

import SelectedTypValueRefer from './SelectedTypValueRefer';
import ValueCount from './ValueCount';
import MinValue from './MinValue';
import MaxValue from './MaxValue';
import NumericValue from './NumericValue';
import NonNumericValue from './NonNumericValue';
import FilteredValueCount from './FilteredValueCount';
import AddSortByASC from './AddSortByASC';
import CompOperDropDown from './CompOperDropDown';
import WFSFilterRequest from './WFSFilterRequest';
import WFSFilterResponse from './WFSFilterResponse';
import consts from './constants';
import sharedStyles from '../shared.module.sass';

const containerStyle = { backgroundColor: 'rgb(224, 224, 224)' };

export default function FilterWFS() {
    return (
        <Col md="6" style={containerStyle}>
            <h4 className={sharedStyles.header}>{consts.header}</h4>
            <Form>
                <SelectedTypValueRefer />
                <ValueCount />
                <MinValue />
                <MaxValue />
                <NumericValue />
                <NonNumericValue />
                <CompOperDropDown />
                <FilteredValueCount />
                <AddSortByASC />
                <WFSFilterRequest />
                <WFSFilterResponse />
            </Form>
        </Col>
    );
}
