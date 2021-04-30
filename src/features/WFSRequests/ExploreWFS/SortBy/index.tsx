import { Col, FormGroup, Label, Input } from 'reactstrap';

import { useAppContext } from '../../../../context';
import consts from './constants';
import sharedStyles from '../../shared.module.sass';

export default function SortBy() {
    const { state } = useAppContext();
    return (
        <FormGroup row>
            <Label
                className={`${sharedStyles.labelFont} mb-2`}
                for={consts.sortBy}
                md={2}>
                {consts.sortBy}
            </Label>
            <Col md={9}>
                <Input
                    disabled
                    id={consts.sortBy}
                    type="text"
                    value={state.sortBy}
                />
            </Col>
        </FormGroup>
    );
}
