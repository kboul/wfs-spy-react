import React, { FC } from 'react';
import { FormGroup, Label, Col, Input } from 'reactstrap';

import consts from './constants';
import sharedStyles from '../shared.module.sass';

const FilteredValueCount: FC = () => {
    return (
        <FormGroup row>
            <Label
                for="filtValueCount"
                md={4}
                className={sharedStyles.labelFont}>
                {consts.filtValueCount}
            </Label>
            <Col md={7}>
                <Input type="text" disabled />
            </Col>
        </FormGroup>
    );
};

export default FilteredValueCount;
