import React, { useContext, FC } from 'react';
import { Col, FormGroup, Label, Input } from 'reactstrap';
import Context from '../../context';
import { setTypename } from '../../context/actions';
import { consts } from './constants';
import sharedStyles from '../shared.module.sass';

const Typename: FC = () => {
    const { state, dispatch } = useContext(Context);
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
                    onChange={e => dispatch(setTypename(e.target.value))}>
                    {state.typenames.map((typename: string) => (
                        <option key={typename}>{typename}</option>
                    ))}
                </Input>
            </Col>
        </FormGroup>
    );
};

export default Typename;
