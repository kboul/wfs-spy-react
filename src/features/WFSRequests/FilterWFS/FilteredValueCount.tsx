import { FormGroup, Label, Col, Input } from 'reactstrap';

import { useAppContext } from '../../../context';
import sharedStyles from '../shared.module.sass';

const consts = { filterValueCount: ' Filtered value count' };

export default function FilteredValueCount() {
    const { state } = useAppContext();
    return (
        <FormGroup row>
            <Label
                className={sharedStyles.labelFont}
                for="filterValueCount"
                md={4}>
                {consts.filterValueCount}
            </Label>
            <Col md={7}>
                <Input disabled type="text" value={state.filterValueCount} />
            </Col>
        </FormGroup>
    );
}
