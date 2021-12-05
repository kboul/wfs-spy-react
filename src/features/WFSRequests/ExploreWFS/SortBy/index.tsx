import { Col, FormGroup, Label, Input } from 'reactstrap';

import { useAppContext } from '../../../../context';
import sharedStyles from '../../shared.module.sass';

export const consts = { label: 'sortBy' };

export default function SortBy() {
    const { state } = useAppContext();
    return (
        <FormGroup row>
            <Label
                className={`${sharedStyles.labelFont} mb-2`}
                for={consts.label}
                md={2}>
                {consts.label}
            </Label>
            <Col md={9}>
                <Input
                    disabled
                    id={consts.label}
                    type="text"
                    value={state.sortBy}
                />
            </Col>
        </FormGroup>
    );
}
