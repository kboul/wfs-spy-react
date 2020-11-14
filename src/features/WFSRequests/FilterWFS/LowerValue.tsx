import React from 'react';
import { FormGroup, Label, Col, Input } from 'reactstrap';

import { changeLowerValue, useAppContext } from '../../../context';
import { ChangeEvent } from '../../../shared/models';
import colors from '../../../config/colors';
import { propIsBetween } from '../../../shared/constants';
import sharedStyles from '../shared.module.sass';

const consts = { lowerValue: 'Enter lower value' };

export default function LowerValue() {
    const { state, dispatch } = useAppContext();

    const handleChange = (e: ChangeEvent) =>
        dispatch(changeLowerValue({ lowerValue: e.target.value }));

    if (state.compOper === propIsBetween)
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
