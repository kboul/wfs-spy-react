import React, { FC } from 'react';
import { FormGroup, Label, Col, Input } from 'reactstrap';

import consts from './constants';
import sharedStyles from '../shared.module.sass';

const AddSortByASC: FC = () => {
    return (
        <FormGroup row>
            <Label
                for="addSortByAsc"
                md={4}
                className={`${sharedStyles.labelFont} mb-2`}>
                {consts.addSortByAsc}
            </Label>
            <Col md={7}>
                <Input type="select" disabled />
            </Col>
        </FormGroup>
    );
};

export default AddSortByASC;
