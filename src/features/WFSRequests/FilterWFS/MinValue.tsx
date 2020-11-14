import React from 'react';
import { FormGroup, Label, Col, Input } from 'reactstrap';

import { useAppContext } from '../../../context';
import sharedStyles from '../shared.module.sass';

const consts = { minValue: 'Minimum value' };

export default function MinValue() {
    const { state } = useAppContext();
    return (
        <FormGroup row>
            <Label for="minValue" md={4} className={sharedStyles.labelFont}>
                {consts.minValue}
            </Label>
            <Col md={7}>
                <Input type="text" disabled value={state.minValue} />
            </Col>
        </FormGroup>
    );
}
