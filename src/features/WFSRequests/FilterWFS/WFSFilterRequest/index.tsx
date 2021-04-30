import { FormGroup, Col, Label, Input } from 'reactstrap';

import TableButtons from '../../components/TableButtons';
import { useAppContext, changeState, types } from '../../../../context';
import { formGetFilterRequest, formPostFilterRequest } from '../utils';
import validateFiltReqBtn from './utils';
import { isMethodGet, requestBtnStatus } from '../../utils';
import consts from './constants';
import sharedStyles from '../../shared.module.sass';

export default function WfsFilterRequest() {
    const { state, dispatch } = useAppContext();

    const handleClick = (httpMethod: string) => {
        const wfsFilterRequest = isMethodGet(httpMethod)
            ? formGetFilterRequest(state)
            : formPostFilterRequest(state);
        const payload = {
            wfsFilterRequest,
            ...requestBtnStatus(httpMethod, 'filter')
        };
        dispatch(changeState(types.wfsFilterRequestChanged, payload));
    };

    return (
        <FormGroup className="text-center" row>
            <Col md={{ size: 10, offset: 1 }}>
                <Label
                    className={sharedStyles.labelFont}
                    for={consts.wfsFilterRequest}>
                    {consts.wfsFilterRequestLabel}
                </Label>
                <Input
                    className={sharedStyles.textarea}
                    disabled
                    id={consts.wfsFilterRequest}
                    rows="10"
                    type="textarea"
                    value={state.wfsFilterRequest}
                />
                <TableButtons
                    disabled={validateFiltReqBtn(state)}
                    label="Filter Request"
                    onGetClick={() => handleClick('GET')}
                    onPostClick={() => handleClick('POST')}
                />
            </Col>
        </FormGroup>
    );
}
