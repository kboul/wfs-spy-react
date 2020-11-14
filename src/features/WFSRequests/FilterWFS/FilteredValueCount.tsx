import React from 'react';
import { FormGroup, Label, Col, Input } from 'reactstrap';

import { useAppContext } from '../../../context';
import sharedStyles from '../shared.module.sass';

const consts = { filtValueCount: ' Filtered value count' };

export default function FilteredValueCount() {
    const { state } = useAppContext();
    return (
        <FormGroup row>
            <Label
                className={sharedStyles.labelFont}
                for="filtValueCount"
                md={4}>
                {consts.filtValueCount}
            </Label>
            <Col md={7}>
                <Input disabled type="text" value={state.filtValueCount} />
            </Col>
        </FormGroup>
    );
}
