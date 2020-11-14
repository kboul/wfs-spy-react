import React from 'react';
import { FormGroup, Label, Col, Input } from 'reactstrap';

import { changeNumericValue, useAppContext } from '../../../../context';
import { getValRefType } from '../utils';
import { ChangeEvent } from '../../../../shared/models';
import consts from './constants';
import colors from '../../../../config/colors';
import sharedStyles from '../../shared.module.sass';

export default function NumericValue() {
    const { state, dispatch } = useAppContext();

    const handleChange = (e: ChangeEvent) =>
        dispatch(changeNumericValue({ numericValue: e.target.value }));

    const valRefType = getValRefType(
        state.typename,
        state.valueReference,
        state.valueReferences
    );

    if (
        state.getPropValResp &&
        valRefType &&
        consts.numericTypes.includes(valRefType)
    )
        return (
            <FormGroup row>
                <Label
                    className={sharedStyles.labelFont}
                    for="numericValue"
                    md={4}>
                    {consts.numericValue}
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
