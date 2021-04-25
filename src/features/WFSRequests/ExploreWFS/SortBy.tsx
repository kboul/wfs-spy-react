import { Col, FormGroup, Label, Input } from 'reactstrap';

import { useAppContext } from '../../../context';
import sharedStyles from '../shared.module.sass';

const consts = { sortBy: 'sortBy' };

export default function SortBy() {
    const { state } = useAppContext();
    return (
        <FormGroup row>
            <Label
                className={`${sharedStyles.labelFont} mb-2`}
                for="sortBy"
                md={2}>
                {consts.sortBy}
            </Label>
            <Col md={9}>
                <Input disabled type="text" value={state.sortBy} />
            </Col>
        </FormGroup>
    );
}
