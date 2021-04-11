import { FormGroup, Label, Col, Input } from 'reactstrap';

import { useAppContext } from '../../../context';
import sharedStyles from '../shared.module.sass';

const consts = { valueCount: 'Value count' };

export default function ValueCount() {
    const { state } = useAppContext();
    return (
        <FormGroup row>
            <Label className={sharedStyles.labelFont} for="valueCount" md={4}>
                {consts.valueCount}
            </Label>
            <Col md={7}>
                <Input disabled type="text" value={state.valueCount} />
            </Col>
        </FormGroup>
    );
}
