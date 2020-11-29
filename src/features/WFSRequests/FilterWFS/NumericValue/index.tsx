import React from 'react';
import { FormGroup, Label, Col, Input } from 'reactstrap';

import { changeNumericValue, useAppContext } from '../../../../context';
import { ChangeEvent } from '../../../../shared/models';
import { isPropBetween } from '../../utils';
import colors from '../../../../config/colors';
import sharedStyles from '../../shared.module.sass';

const numericValue = 'Enter Value';

export default function NumericValue() {
    const { state, dispatch } = useAppContext();

    const handleChange = (e: ChangeEvent) =>
        dispatch(changeNumericValue({ numericValue: e.target.value }));

    if (state.showNumericValue && !isPropBetween(state.compOper))
        return (
            <FormGroup row>
                <Label
                    className={sharedStyles.labelFont}
                    for="numericValue"
                    md={4}>
                    {numericValue}
                </Label>
                <Col md={7}>
                    <Input
                        disabled={!state.getPropValResp}
                        onChange={handleChange}
                        style={{ backgroundColor: colors.lightPurple }}
                        type="text"
                        value={state.numericValue}
                    />
                </Col>
            </FormGroup>
        );
    return null;
}
