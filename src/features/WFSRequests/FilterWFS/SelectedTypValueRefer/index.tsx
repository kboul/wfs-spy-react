import { CSSProperties } from 'react';
import { FormGroup, Label, Col, Input } from 'reactstrap';

import { useAppContext } from '../../../../context';
import sharedStyles from '../../shared.module.sass';

const labelStyle: CSSProperties = {
    paddingTop: '20px',
    whiteSpace: 'pre-wrap'
};

export const consts = {
    id: 'selectedTypValueRef',
    label: 'Selected typeName\n & valueReference'
};

export default function SelectedTypValueRefer() {
    const { state } = useAppContext();
    return (
        <FormGroup row>
            <Label
                className={sharedStyles.labelFont}
                for="selectedTypValueRef"
                md={4}
                style={labelStyle}>
                {consts.label}
            </Label>
            <Col md={7}>
                <Input
                    className={sharedStyles.textarea}
                    disabled
                    id={consts.id}
                    rows="3"
                    type="textarea"
                    value={state.selectedTypValueRef}
                />
            </Col>
        </FormGroup>
    );
}
