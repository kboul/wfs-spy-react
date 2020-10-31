import React, { useContext } from 'react';
import { FormGroup, Label, Col, Input } from 'reactstrap';

import Context, { ContextProps } from '../../../context';
import { changeCompOper } from '../../../context/actions';
import { extractFilterCap, parseXML } from '../../../shared/wfsMetadata';
import { ChangeEvent } from '../../../shared/models';
import consts from './constants';
import sharedStyles from '../shared.module.sass';

export default function CompOperDropDown() {
    const { state, dispatch } = useContext<ContextProps>(Context);
    const parsedResponse = parseXML(state.getCapResp);
    const compOper = extractFilterCap(parsedResponse, 'ComparisonOperator');

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
                    {compOper.map(operator => (
                        <option key={operator}>{operator}</option>
                    ))}
                </Input>
            </Col>
        </FormGroup>
    );
}
