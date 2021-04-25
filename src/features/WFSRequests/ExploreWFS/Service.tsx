import { Col, FormGroup, Label, Input } from 'reactstrap';

import { useAppContext } from '../../../context';
import sharedStyles from '../shared.module.sass';

const consts = { service: 'service' };

export default function Service() {
    const { state } = useAppContext();
    return (
        <FormGroup row>
            <Label className={sharedStyles.labelFont} for="service" md={2}>
                {consts.service}
            </Label>
            <Col md={9}>
                <Input disabled type="text" value={state.service} />
            </Col>
        </FormGroup>
    );
}
