import React from 'react';
import { FormGroup, Col, Label, Input } from 'reactstrap';

import TableButtons from '../components/TableButtons';
import { useAppContext, changeState, types } from '../../../context';
import wfsApi from '../../../api/wfsApi';
import { errorMessage, getOrPost, getTimeInMs, isMethodGet } from '../utils';
import { formGetFilterRequest, formPostFilterRequest } from './utils';
import globalConsts from '../../../config';
import sharedStyles from '../shared.module.sass';

const consts = {
    filterResponseMetadata:
        'Filtered Response - Metadata using Filter parameters:'
};

export default function WFSFilterResponse() {
    const { state, dispatch } = useAppContext();

    const disabled = !state.getPropValResp || !state.wfsFilterRequest;

    const changeWfsFilterResponse = (wfsFilterResponse: string) => {
        dispatch(
            changeState(types.wfsFilterResponseChanged, { wfsFilterResponse })
        );
    };

    const requestMethod = async (httpMethod: string) => {
        return isMethodGet(httpMethod)
            ? wfsApi.getWfsRequest(formGetFilterRequest(state), state.url)
            : wfsApi.postWfsRequest(formPostFilterRequest(state), state.url);
    };

    const handleClick = async (httpMethod: string) => {
        changeWfsFilterResponse(globalConsts.proccessMessage);
        const startGET = getTimeInMs();
        try {
            const { data, status } = await requestMethod(httpMethod);
            if (status === 200) {
                changeWfsFilterResponse(data);
                const time = getTimeInMs() - startGET;
                const payload = {
                    getPropValFiltResp: data,
                    [`${getOrPost(httpMethod)}GetPropValFiltTime`]: time
                };
                dispatch(changeState(types.getPropValFiltRespChanged, payload));
            }
        } catch (error) {
            const { response } = error;
            if (response) changeWfsFilterResponse(errorMessage(response));
        }
    };

    const handleModalClick = (httpMethod: string) => {
        dispatch(changeState(types.modalToggled, { modalOperation: 'filter' }));
        handleClick(httpMethod);
    };

    return (
        <FormGroup className="text-center" row>
            <Col md={{ size: 10, offset: 1 }}>
                <Label
                    className={sharedStyles.labelFont}
                    for="wfsFilterResponse">
                    {consts.filterResponseMetadata}
                </Label>
                <Input
                    className={sharedStyles.textarea}
                    disabled
                    rows="10"
                    type="textarea"
                    value={state.wfsFilterResponse}
                />
                <TableButtons
                    disabled={disabled}
                    hasModal
                    label="Filter Response"
                    onGetClick={() => handleClick('GET')}
                    onGetModalClick={() => handleModalClick('GET')}
                    onPostClick={() => handleClick('POST')}
                    onPostModalClick={() => handleModalClick('POST')}
                />
            </Col>
        </FormGroup>
    );
}
