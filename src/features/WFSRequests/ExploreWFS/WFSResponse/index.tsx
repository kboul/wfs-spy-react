import React from 'react';
import axios from 'axios';
import { Col, FormGroup, Label, Input } from 'reactstrap';

import TableButtons from '../../components/TableButtons';
import { useAppContext, changeState, types } from '../../../../context';
import {
    changeDescFeatTypeResp,
    changeGetCapResp,
    changeGetPropValResp
} from './actions';
import { formGetRequest, formPostRequest } from '../utils';
import {
    adjustProxyToUrl,
    getTimeInMs,
    errorMessage,
    isMethodGet
} from '../../utils';
import globalConsts from '../../../../config';
import consts from './constants';
import sharedStyles from '../../shared.module.sass';

const { axiosConfig, proccessMessage, requests } = globalConsts;

export default function WFSResponse() {
    const { state, dispatch } = useAppContext();

    const changeWfsResponse = (wfsResponse: string) => {
        dispatch(changeState(types.wfsResponseChanged, { wfsResponse }));
    };

    const requestMethod = async (httpMethod: string) => {
        const wfsRequest = isMethodGet(httpMethod)
            ? formGetRequest(state)
            : formPostRequest(state);
        return isMethodGet(httpMethod)
            ? axios.get(adjustProxyToUrl(wfsRequest))
            : axios.post(adjustProxyToUrl(state.url), wfsRequest, axiosConfig);
    };

    const handleClick = async (httpMethod: string) => {
        changeWfsResponse(proccessMessage);
        const startGET = getTimeInMs();
        try {
            const { data, status } = await requestMethod(httpMethod);
            if (status === 200) {
                changeWfsResponse(data);
                const time = getTimeInMs() - startGET;
                switch (state.request) {
                    case requests[0]:
                        changeGetCapResp(httpMethod, dispatch, data, time);
                        break;
                    case requests[1]:
                        changeDescFeatTypeResp(
                            httpMethod,
                            dispatch,
                            data,
                            time
                        );
                        break;
                    case requests[2]:
                        changeGetPropValResp(httpMethod, dispatch, data, time);
                        break;
                    default:
                }
            }
        } catch (error) {
            const { response } = error;
            if (response) changeWfsResponse(errorMessage(response));
        }
    };

    const handleModalClick = (httpMethod: string) => {
        dispatch(changeState(types.modalToggled, { modalOperation: 'normal' }));
        handleClick(httpMethod);
    };

    return (
        <FormGroup className="text-center" row>
            <Col md={{ size: 10, offset: 1 }}>
                <Label className={sharedStyles.labelFont} for="wfsResponse">
                    {consts.responseMetadata}
                </Label>
                <Input
                    className={sharedStyles.textarea}
                    disabled
                    rows="10"
                    type="textarea"
                    value={state.wfsResponse}
                />
                <TableButtons
                    disabled={!state.wfsRequest}
                    hasModal
                    label={consts.response}
                    onGetClick={() => handleClick('GET')}
                    onGetModalClick={() => handleModalClick('GET')}
                    onPostClick={() => handleClick('POST')}
                    onPostModalClick={() => handleModalClick('POST')}
                />
            </Col>
        </FormGroup>
    );
}
