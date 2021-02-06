import React from 'react';
import { FormGroup, Label, Col, Input } from 'reactstrap';

import { useAppContext, changeState, types } from '../../../context';
import { isPropBetween } from '../utils';
import { ChangeEvent } from '../../../models/events';
import globalConsts from '../../../config';
import sharedStyles from '../shared.module.sass';

const consts = { upperValue: 'Enter upper value' };
const upperValueStyle = {
    backgroundColor: globalConsts.colors.lightPurple
};

export default function UpperValue() {
    const { state, dispatch } = useAppContext();

    const handleChange = (e: ChangeEvent) => {
        const upperValue = e.target.value;
        dispatch(changeState(types.upperValueChanged, { upperValue }));
    };

    if (isPropBetween(state.compOper))
        return (
            <FormGroup row>
                <Label
                    className={sharedStyles.labelFont}
                    for="upperValue"
                    md={4}>
                    {consts.upperValue}
                </Label>
                <Col md={7}>
                    <Input
                        autoFocus
                        onChange={handleChange}
                        style={upperValueStyle}
                        type="text"
                        value={state.upperValue}
                    />
                </Col>
            </FormGroup>
        );
    return null;
}
