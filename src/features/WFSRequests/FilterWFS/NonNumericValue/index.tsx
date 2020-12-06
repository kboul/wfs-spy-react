import React from 'react';
import { FormGroup, Label, Col } from 'reactstrap';
import { Typeahead } from 'react-bootstrap-typeahead';

import { useAppContext, changeState, types } from '../../../../context';
import { isPropBetween } from '../../utils';
import colors from '../../../../config/colors';
import sharedStyles from '../../shared.module.sass';

const nonNumericValue = 'Search strings';

export default function NonNumericValue() {
    const { state, dispatch } = useAppContext();

    const handleChange = (value: string[]) =>
        dispatch(
            changeState(types.nonNumericValueChanged, {
                nonNumericValue: value
            })
        );

    if (state.showNonNumericValue && !isPropBetween(state.compOper))
        return (
            <FormGroup row>
                <Label
                    className={sharedStyles.labelFont}
                    for="nonNumericValue"
                    md={4}>
                    {nonNumericValue}
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
