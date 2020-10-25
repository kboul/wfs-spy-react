import React, { useContext } from 'react';
import { Col, FormGroup, Label, Input } from 'reactstrap';

import Context, { ContextProps } from '../../../context';
import { changeTypename } from '../../../context/actions';
import consts from './constants';
import sharedStyles from '../shared.module.sass';

const Typename = () => {
    const { state, dispatch } = useContext<ContextProps>(Context);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        dispatch(changeTypename({ typename: e.target.value }));

    return (
        <FormGroup row>
            <Label for="typeName" md={2} className={sharedStyles.labelFont}>
                {consts.typename}
            </Label>
            <Col md={9}>
                <Input
                    type="select"
                    disabled={!state.typenames.length}
                    value={state.typename}
                    onChange={handleChange}>
                    {state.typenames.map(typename => (
                        <option key={typename}>{typename}</option>
                    ))}
                </Input>
            </Col>
        </FormGroup>
    );
};

export default Typename;
