import React from 'react';
import { FormGroup, Label, Col, Input } from 'reactstrap';

import { changeAddSortBy, useAppContext } from '../../../context';
import { ChangeEvent } from '../../../shared/models';
import sharedStyles from '../shared.module.sass';

const consts = { options: ['no', 'yes'], addSortByAsc: 'Add SortBy ASC' };

export default function AddSortByASC() {
    const { state, dispatch } = useAppContext();
    const { getPropValResp, addSortBy } = state;

    const handleChange = (e: ChangeEvent) =>
        dispatch(changeAddSortBy({ addSortBy: e.target.value }));

    return (
        <FormGroup row>
            <Label
                for="addSortByAsc"
                md={4}
                className={`${sharedStyles.labelFont} mb-2`}>
                {consts.addSortByAsc}
            </Label>
            <Col md={7}>
                <Input
                    type="select"
                    disabled={!getPropValResp}
                    onChange={handleChange}
                    value={addSortBy}>
                    {consts.options.map(option => (
                        <option key={option}>{option}</option>
                    ))}
                </Input>
            </Col>
        </FormGroup>
    );
}
