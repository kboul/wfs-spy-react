import React, { useContext, FC } from 'react';
import { Col, FormGroup, Label, Input } from 'reactstrap';
import Context from '../../context';
import { setRequest } from '../../context/actions';
import { requests } from '../../shared/constants';
import { consts } from './constants';
import sharedStyles from '../shared.module.sass';

const RequestInput: FC = () => {
    const { state, dispatch } = useContext(Context);
    return (
        <FormGroup row>
            <Label for="request" md={2} className={sharedStyles.labelFont}>
                {consts.requestOperation}
            </Label>
            <Col md={9}>
                <Input
                    type="select"
                    value={state.request}
                    onChange={e => dispatch(setRequest(e.target.value))}>
                    {requests.map(request => (
                        <option key={request}>{request}</option>
                    ))}
                </Input>
            </Col>
        </FormGroup>
    );
};

export default RequestInput;
