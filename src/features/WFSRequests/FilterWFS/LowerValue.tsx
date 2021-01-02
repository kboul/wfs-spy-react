import React from 'react';
import { FormGroup, Label, Col, Input } from 'reactstrap';

import { useAppContext, changeState, types } from '../../../context';
import { isPropBetween } from '../utils';
import { ChangeEvent } from '../../../models/events';
import colors from '../../../config/colors';
import sharedStyles from '../shared.module.sass';

const consts = { lowerValue: 'Enter lower value' };

export default function LowerValue() {
    const { state, dispatch } = useAppContext();

    const handleChange = (e: ChangeEvent) => {
        const lowerValue = e.target.value;
        dispatch(changeState(types.lowerValueChanged, { lowerValue }));
    };

    if (isPropBetween(state.compOper))
        return (
            <FormGroup row>
                <Label
                    className={sharedStyles.labelFont}
                    for="lowerValue"
                    md={4}>
                    {consts.lowerValue}
                </Label>
                <Col md={7}>
                    <Input
                        autoFocus
                        onChange={handleChange}
                        style={{ backgroundColor: colors.lightPurple }}
                        type="text"
                        value={state.lowerValue}
                    />
                </Col>
            </FormGroup>
        );
    return null;
}
