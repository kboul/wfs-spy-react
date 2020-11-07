import React from 'react';
import { FormGroup, Label, Col, Input } from 'reactstrap';

import { changeNonNumericValue, useAppContext } from '../../../context';
import { getValRefType } from './utils';
import { ChangeEvent } from '../../../shared/models';
import consts from './constants';
import colors from '../../../config/colors';
import sharedStyles from '../shared.module.sass';

export default function NonNumericValue() {
    const { state, dispatch } = useAppContext();

    const handleChange = (e: ChangeEvent) =>
        dispatch(changeNonNumericValue({ nonNumericValue: e.target.value }));

    const valRefType = getValRefType(
        state.typename,
        state.valueReference,
        state.valueReferences
    );

    if (
        state.getPropValResp &&
        valRefType &&
        consts.nonNumericTypes.includes(valRefType)
    )
        return (
            <FormGroup row>
                <Label className={sharedStyles.labelFont} for="maxValue" md={4}>
                    {consts.nonNumericValue}
                </Label>
                <Col md={7}>
                    <Input
                        autoFocus
                        disabled={!state.getPropValResp}
                        onChange={handleChange}
                        style={{ backgroundColor: colors.lightPurple }}
                        type="text"
                        value={state.nonNumericValue}
                    />
                </Col>
            </FormGroup>
        );
    return null;
}
