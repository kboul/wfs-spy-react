import React from 'react';
import { FormGroup, Label, Col, Input } from 'reactstrap';

import { changeUpperValue, useAppContext } from '../../../context';
import { ChangeEvent } from '../../../shared/models';
import colors from '../../../config/colors';
import { propIsBetween } from '../../../shared/constants';
import sharedStyles from '../shared.module.sass';

const consts = {
    upperValue: 'Enter upper value'
};

export default function UpperValue() {
    const { state, dispatch } = useAppContext();

    const handleChange = (e: ChangeEvent) =>
        dispatch(changeUpperValue({ upperValue: e.target.value }));

    if (state.compOper === propIsBetween)
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
                        style={{ backgroundColor: colors.lightPurple }}
                        type="text"
                        value={state.upperValue}
                    />
                </Col>
            </FormGroup>
        );
    return null;
}
