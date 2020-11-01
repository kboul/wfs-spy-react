import React from 'react';
import { FormGroup, Label, Col, Input } from 'reactstrap';

import { useAppContext } from '../../../context';
import consts from './constants';
import sharedStyles from '../shared.module.sass';

export default function MaxValue() {
    const { state } = useAppContext();
    return (
        <FormGroup row>
            <Label for="maxValue" md={4} className={sharedStyles.labelFont}>
                {consts.maxValue}
            </Label>
            <Col md={7}>
                <Input type="text" disabled value={state.maxValue} />
            </Col>
        </FormGroup>
    );
}
