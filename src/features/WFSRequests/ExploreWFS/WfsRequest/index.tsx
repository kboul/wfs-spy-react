import { Col, FormGroup, Label, Input } from 'reactstrap';

import TableButtons from '../../components/TableButtons';
import { useAppContext, changeState, types } from '../../../../context';
import { formGetRequest, formPostRequest } from '../utils';
import { isMethodGet, requestBtnStatus } from '../../utils';
import consts from './constants';
import sharedStyles from '../../shared.module.sass';

export default function WfsRequest() {
    const { state, dispatch } = useAppContext();

    const handleClick = (httpMethod: string) => {
        const wfsRequest = isMethodGet(httpMethod)
            ? formGetRequest(state)
            : formPostRequest(state);
        const payload = { wfsRequest, ...requestBtnStatus(httpMethod) };
        dispatch(changeState(types.wfsRequestChanged, payload));
    };

    return (
        <FormGroup className="text-center" row>
            <Col md={{ size: 10, offset: 1 }}>
                <Label
                    className={sharedStyles.labelFont}
                    for={consts.wfsRequest}>
                    {consts.wfsRequestLabel}
                </Label>
                <Input
                    className={sharedStyles.textarea}
                    id={consts.wfsRequest}
                    disabled
                    rows="10"
                    type="textarea"
                    value={state.wfsRequest}
                />
                <TableButtons
                    disabled={false}
                    label={consts.request}
                    onGetClick={() => handleClick('GET')}
                    onPostClick={() => handleClick('POST')}
                />
            </Col>
        </FormGroup>
    );
}
