import React from 'react';
import { FormGroup, Label, Col, Input } from 'reactstrap';

import { useAppContext, changeState, types } from '../../../context';
import { ChangeEvent } from '../../../models/events';
import sharedStyles from '../shared.module.sass';

const consts = { options: ['no', 'yes'], addSortByAsc: 'Add SortBy ASC' };

export default function AddSortByASC() {
    const { state, dispatch } = useAppContext();

    const handleChange = (e: ChangeEvent) => {
        const addSortBy = e.target.value;
        dispatch(changeState(types.addSortByChanged, { addSortBy }));
    };

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
                    disabled={!state.getPropValResp}
                    onChange={handleChange}
                    value={state.addSortBy}>
                    {consts.options.map(option => (
                        <option key={option}>{option}</option>
                    ))}
                </Input>
            </Col>
        </FormGroup>
    );
}
