import React from 'react';
import { FormGroup, Label, Col, Input } from 'reactstrap';

import consts from './constants';
import sharedStyles from '../shared.module.sass';

export default function CompOperDropDown() {
    return (
        <FormGroup row>
            <Label
                for="compOperDropDown"
                md={4}
                className={sharedStyles.labelFont}>
                {consts.compOper}
            </Label>
            <Col md={7}>
                <Input type="select" disabled />
            </Col>
        </FormGroup>
    );
}
