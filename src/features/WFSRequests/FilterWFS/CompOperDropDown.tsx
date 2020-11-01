import React from 'react';
import { FormGroup, Label, Col, Input } from 'reactstrap';

import { useAppContext, changeCompOper } from '../../../context';
import { getCompOperList } from '../../../shared/utils';
import { ChangeEvent } from '../../../shared/models';
import consts from './constants';
import sharedStyles from '../shared.module.sass';

export default function CompOperDropDown() {
    const { state, dispatch } = useAppContext();
    const compOperList = getCompOperList(state.getCapResp);

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
                    {compOperList.map(compOper => (
                        <option key={compOper}>{compOper}</option>
                    ))}
                </Input>
            </Col>
        </FormGroup>
    );
}
