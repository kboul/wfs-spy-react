import React, { CSSProperties } from 'react';
import { FormGroup, Label, Col, Input } from 'reactstrap';

import { useAppContext } from '../../../context';
import consts from './constants';
import sharedStyles from '../shared.module.sass';

const selectedTypValueRefStyle: CSSProperties = {
    paddingTop: '20px',
    whiteSpace: 'pre-wrap'
};

export default function SelectedTypValueRefer() {
    const { state } = useAppContext();

    return (
        <FormGroup row>
            <Label
                for="selectedTypValueRef"
                md={4}
                className={sharedStyles.labelFont}
                style={selectedTypValueRefStyle}>
                {consts.selectedTypValueRef}
            </Label>
            <Col md={7}>
                <Input
                    type="textarea"
                    rows="3"
                    className={sharedStyles.textarea}
                    disabled
                    value={state.selectedTypValueRef}
                />
            </Col>
        </FormGroup>
    );
}
