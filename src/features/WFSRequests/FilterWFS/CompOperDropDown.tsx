import React, { useEffect } from 'react';
import { FormGroup, Label, Col, Input } from 'reactstrap';

import { useAppContext, changeCompOper } from '../../../context';
import { extractFilterCap, parseXML } from '../../../shared/wfsMetadata';
import { ChangeEvent } from '../../../shared/models';
import consts from './constants';
import sharedStyles from '../shared.module.sass';

export default function CompOperDropDown() {
    const { state, dispatch } = useAppContext();
    const parsedResponse = parseXML(state.getCapResp);
    const compOpers = extractFilterCap(parsedResponse, 'ComparisonOperator');

    useEffect(() => {
        if (state.getCapResp && !state.getPropValResp)
            dispatch(changeCompOper({ compOper: compOpers[0] }));
        // eslint-disable-next-line
    }, [state.getCapResp]);

    const handleChange = (e: ChangeEvent) =>
        dispatch(changeCompOper({ compOper: e.target.value }));

    return (
        <FormGroup row>
            <Label
                for="compOperDropDown"
                md={4}
                className={sharedStyles.labelFont}>
                {consts.compOper}
            </Label>
            <Col md={7}>
                <Input
                    disabled={!state.getPropValResp}
                    onChange={handleChange}
                    type="select"
                    value={state.compOper}>
                    {compOpers.map(operator => (
                        <option key={operator}>{operator}</option>
                    ))}
                </Input>
            </Col>
        </FormGroup>
    );
}
