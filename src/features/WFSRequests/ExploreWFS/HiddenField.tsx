import React from 'react';
import { Col, FormGroup, Label, Input } from 'reactstrap';

import { useAppContext } from '../../../context';
import { noOption } from '../../../shared/constants';

const formStyle = { opacity: 0 };

export default function HiddenField() {
    const { state } = useAppContext();
    const { typename, valueReference, getPropValResp } = state;
    if (typename && typename !== noOption && valueReference && getPropValResp)
        return (
            <FormGroup row style={formStyle}>
                <Label for="hiddenField" md={2} />
                <Col md={9}>
                    <Input type="text" />
                </Col>
            </FormGroup>
        );
    return null;
}
