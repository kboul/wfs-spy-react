import React, { useContext } from 'react';
import { Col, FormGroup, Label, Input } from 'reactstrap';

import Context, { ContextProps } from '../../../context';
import { changeRequest } from '../../../context/actions';
import { requests } from '../../../shared/constants';
import consts from './constants';
import sharedStyles from '../shared.module.sass';

const RequestInput = () => {
    const { state, dispatch } = useContext<ContextProps>(Context);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        dispatch(changeRequest({ request: e.target.value }));

    return (
        <FormGroup row>
            <Label for="request" md={2} className={sharedStyles.labelFont}>
                {consts.requestOperation}
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
};

export default RequestInput;
