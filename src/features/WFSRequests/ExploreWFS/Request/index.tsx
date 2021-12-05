import { Col, FormGroup, Label, Input } from 'reactstrap';

import { useAppContext, changeState, types } from '../../../../context';
import globalConsts from '../../../../constants';
import { ChangeEvent } from '../../../../models/events';
import sharedStyles from '../../shared.module.sass';

export const consts = { label: 'request' };

export default function Request() {
    const { state, dispatch } = useAppContext();

    const handleChange = (e: ChangeEvent) => {
        const request = e.target.value;
        dispatch(changeState(types.requestChanged, { request }));
    };

    return (
        <FormGroup row>
            <Label className={sharedStyles.labelFont} for={consts.label} md={2}>
                {consts.label}
            </Label>
            <Col md={9}>
                <Input
                    id={consts.label}
                    type="select"
                    value={state.request}
                    onChange={handleChange}>
                    {globalConsts.requests.map(request => (
                        <option key={request}>{request}</option>
                    ))}
                </Input>
            </Col>
        </FormGroup>
    );
}
