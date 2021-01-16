import React from 'react';
import axios from 'axios';
import { FormGroup, Col, Label, Input } from 'reactstrap';

import TableButtons from '../components/TableButtons';
import { useAppContext, changeState, types } from '../../../context';
import {
    adjustProxyToUrl,
    getOrPost,
    getTimeInMs,
    handleErrorResponse,
    isMethodGet
} from '../utils';
import { formGetFilterRequest, formPostFilterRequest } from './utils';
import axiosConfig from '../../../config/axios';
import { proccessMessage } from '../../../config/constants';
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
        const wfsRequest = isMethodGet(httpMethod)
            ? formGetFilterRequest(state)
            : formPostFilterRequest(state);
        return isMethodGet(httpMethod)
            ? axios.get(adjustProxyToUrl(wfsRequest))
            : axios.post(adjustProxyToUrl(state.url), wfsRequest, axiosConfig);
    };

    const handleClick = async (httpMethod: string) => {
        changeWfsFilterResponse(proccessMessage);
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
            if (response)
                changeWfsFilterResponse(handleErrorResponse(response));
        }
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
                    onPostClick={() => handleClick('POST')}
                />
            </Col>
        </FormGroup>
    );
}
