import React from 'react';
import { FormGroup, Col, Label, Input } from 'reactstrap';

import TableButtons from '../TableButtons';
import { useAppContext, changeState, types } from '../../../context';
import { formWfsFilterRequest } from './utils';
import sharedStyles from '../shared.module.sass';
import { isPropBetween } from '../utils';

const consts = {
    formWfsFilterRequest: 'Form WFS GetPropertyValue Filter Request:'
};

export default function WFSFilterRequest() {
    const { state, dispatch } = useAppContext();

    const handleClick = () => {
        dispatch(
            changeState(types.wfsFilterRequestChanged, {
                wfsFilterRequest: formWfsFilterRequest(state)
            })
        );
    };

    const validateFiltReqBtn = (): boolean | undefined => {
        if (!state.getPropValResp) return true;
        if (isPropBetween(state.compOper))
            return Boolean(!state.lowerValue) || Boolean(!state.upperValue);
        if (state.showNonNumericValue)
            return state.nonNumericValue.length === 0;
        if (state.showNumericValue) return Boolean(!state.numericValue);
        return false;
    };

    return (
        <FormGroup className="text-center" row>
            <Col md={{ size: 10, offset: 1 }}>
                <Label
                    className={sharedStyles.labelFont}
                    for="formWfsFilterRequest">
                    {consts.formWfsFilterRequest}
                </Label>
                <Input
                    className={sharedStyles.textarea}
                    disabled
                    rows="10"
                    type="textarea"
                    value={state.wfsFilterRequest}
                />
                <TableButtons
                    disabled={validateFiltReqBtn()}
                    label="Filter Request"
                    onClick={handleClick}
                />
            </Col>
        </FormGroup>
    );
}
