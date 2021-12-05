import { FormGroup, Label, Col, Input } from 'reactstrap';

import { useAppContext } from '../../../../context';
import sharedStyles from '../../shared.module.sass';

export const consts = {
    id: 'valueCount',
    label: 'Value count'
};

export default function ValueCount() {
    const { state } = useAppContext();
    return (
        <FormGroup row>
            <Label className={sharedStyles.labelFont} for={consts.id} md={4}>
                {consts.label}
            </Label>
            <Col md={7}>
                <Input
                    disabled
                    id={consts.id}
                    type="text"
                    value={state.valueCount}
                />
            </Col>
        </FormGroup>
    );
}
