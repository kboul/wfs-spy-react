import React, { useContext } from 'react';
import { Col, FormGroup, Label, Input } from 'reactstrap';

import Context, { ContextProps } from '../../../context';
import consts from './constants';
import sharedStyles from '../shared.module.sass';

const Service = () => {
    const { state } = useContext<ContextProps>(Context);
    return (
        <FormGroup row>
            <Label for="service" md={2} className={sharedStyles.labelFont}>
                {consts.service}
            </Label>
            <Col md={9}>
                <Input type="text" value={state.service} disabled />
            </Col>
        </FormGroup>
    );
};

export default Service;
