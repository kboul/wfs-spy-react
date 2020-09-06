import React, { useContext } from 'react';
import { FormGroup, Label, Col, Input } from 'reactstrap';

import Context, { ContextProps } from '../../../context';
import consts from './constants';
import sharedStyles from '../shared.module.sass';

export default function MinValue() {
    const { state } = useContext<ContextProps>(Context);
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
