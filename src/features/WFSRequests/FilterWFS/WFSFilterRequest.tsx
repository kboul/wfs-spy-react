import React from 'react';
import { FormGroup, Col, Label, Input } from 'reactstrap';

import TableButtons from '../TableButtons';
import consts from './constants';
import sharedStyles from '../shared.module.sass';

export default function WFSFilterRequest() {
    return (
        <FormGroup className="text-center" row>
            <Col md={{ size: 10, offset: 1 }}>
                <Label
                    for="formWfsFilterRequest"
                    className={sharedStyles.labelFont}>
                    {consts.formWfsFilterRequest}
                </Label>
                <Input
                    type="textarea"
                    rows="10"
                    className={sharedStyles.textarea}
                    disabled
                />
                <TableButtons
                    label="Filter Request"
                    initialState
                    onClick={() => {}}
                />
            </Col>
        </FormGroup>
    );
}
