import React from 'react';
import { Col, FormGroup, Label, Input } from 'reactstrap';

import { useAppContext, changeTypename } from '../../../context';
import { ChangeEvent } from '../../../shared/models';
import sharedStyles from '../shared.module.sass';

const consts = { typename: 'typeName' };

export default function Typename() {
    const { state, dispatch } = useAppContext();

    const handleChange = (e: ChangeEvent) =>
        dispatch(changeTypename({ typename: e.target.value }));

    return (
        <FormGroup row>
            <Label className={sharedStyles.labelFont} for="typeName" md={2}>
                {consts.typename}
            </Label>
            <Col md={9}>
                <Input
                    disabled={!state.typenames.length}
                    onChange={handleChange}
                    type="select"
                    value={state.typename}>
                    {state.typenames.map(typename => (
                        <option key={typename}>{typename}</option>
                    ))}
                </Input>
            </Col>
        </FormGroup>
    );
}
