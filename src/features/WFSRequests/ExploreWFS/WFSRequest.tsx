import React from 'react';
import { Col, FormGroup, Label, Input } from 'reactstrap';

import { useAppContext, changeWfsRequest } from '../../../context';
import TableButtons from '../TableButtons';
import { formWfsRequest } from './utils';
import sharedStyles from '../shared.module.sass';

const consts = { formWfsRequest: 'Form WFS Request:', request: 'Request' };

export default function WFSRequest() {
    const { state, dispatch } = useAppContext();

    const handleClick = () =>
        dispatch(changeWfsRequest({ wfsRequest: formWfsRequest(state) }));

    return (
        <FormGroup className="text-center" row>
            <Col md={{ size: 10, offset: 1 }}>
                <Label className={sharedStyles.labelFont} for="wfsRequest">
                    {consts.formWfsRequest}
                </Label>
                <Input
                    type="textarea"
                    rows="10"
                    className={sharedStyles.textarea}
                    disabled
                    value={state.wfsRequest}
                />
                <TableButtons
                    disabled={false}
                    label={consts.request}
                    onClick={handleClick}
                />
            </Col>
        </FormGroup>
    );
}
