import React from 'react';
import { Col, FormGroup, Label, Input } from 'reactstrap';

import { useAppContext, changeRequest } from '../../../context';
import { requests } from '../../../shared/constants';
import { ChangeEvent } from '../../../shared/models';
import sharedStyles from '../shared.module.sass';

const consts = { request: 'request' };

export default function Request() {
    const { state, dispatch } = useAppContext();

    const handleChange = (e: ChangeEvent) =>
        dispatch(changeRequest({ request: e.target.value }));

    return (
        <FormGroup row>
            <Label className={sharedStyles.labelFont} for="request" md={2}>
                {consts.request}
            </Label>
            <Col md={9}>
                <Input
                    type="select"
                    value={state.request}
                    onChange={handleChange}>
                    {requests.map(request => (
                        <option key={request}>{request}</option>
                    ))}
                </Input>
            </Col>
        </FormGroup>
    );
}
