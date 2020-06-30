import React, { useContext, FC } from 'react';
import { Col, FormGroup, Label, Input } from 'reactstrap';
import Context from '../../context';
import { changeRequest } from '../../context/actions';
import { requests } from '../../shared/constants';
import { consts } from './constants';
import sharedStyles from '../shared.module.sass';

const RequestInput: FC = () => {
    const { state, dispatch } = useContext(Context);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        dispatch(changeRequest({ request: e.target.value }));

    return (
        <FormGroup row>
            <Label for="request" md={2} className={sharedStyles.labelFont}>
                {consts.requestOperation}
            </Label>
            <Col md={9}>
                <Input type="select" value={state.request} onChange={onChange}>
                    {requests.map(request => (
                        <option key={request}>{request}</option>
                    ))}
                </Input>
            </Col>
        </FormGroup>
    );
};

export default RequestInput;
