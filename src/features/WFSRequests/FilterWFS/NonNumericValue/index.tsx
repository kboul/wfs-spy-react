import React from 'react';
import { FormGroup, Label, Col } from 'reactstrap';
import { Typeahead } from 'react-bootstrap-typeahead';

import { changeNonNumericValue, useAppContext } from '../../../../context';
import { getValRefType } from '../utils';
import colors from '../../../../config/colors';
import sharedStyles from '../../shared.module.sass';

const consts = {
    nonNumericTypes: ['string', 'date', 'dateTime'],
    nonNumericValue: 'Search strings'
};

export default function NonNumericValue() {
    const { state, dispatch } = useAppContext();

    const handleChange = (value: string[]) =>
        dispatch(changeNonNumericValue({ nonNumericValue: value }));

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
                <Label
                    className={sharedStyles.labelFont}
                    for="nonNumericValue"
                    md={4}>
                    {consts.nonNumericValue}
                </Label>
                <Col md={7}>
                    <Typeahead
                        disabled={!state.getPropValResp}
                        id="basic-typeahead-single"
                        inputProps={{
                            style: { backgroundColor: colors.lightPurple }
                        }}
                        onChange={handleChange}
                        options={state.attrValues}
                        placeholder="Type a value..."
                        selected={state.nonNumericValue}
                    />
                </Col>
            </FormGroup>
        );
    return null;
}
