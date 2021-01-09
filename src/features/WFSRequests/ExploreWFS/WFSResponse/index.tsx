import React from 'react';
import axios from 'axios';
import { Col, FormGroup, Label, Input } from 'reactstrap';

import TableButtons from '../../TableButtons';
import { useAppContext, changeState, types } from '../../../../context';
import {
    changeDescFeatTypeResp,
    changeGetCapResp,
    changeGetPropValResp
} from './actions';
import { formWfsRequest } from '../utils';
import { adjustProxyToUrl, handleErrorResponse } from '../../utils';
import { requests, proccessMessage } from '../../../../config/constants';
import consts from './constants';
import sharedStyles from '../../shared.module.sass';

export default function WFSResponse() {
    const { state, dispatch } = useAppContext();

    const changeWfsResponse = (wfsResponse: string) => {
        dispatch(changeState(types.wfsResponseChanged, { wfsResponse }));
    };

    const handleClick = async () => {
        changeWfsResponse(proccessMessage);
        const operationUrl = adjustProxyToUrl(formWfsRequest(state));
        if (operationUrl) {
            const startGET = new Date().getTime();
            try {
                const { data, status } = await axios.get(operationUrl);
                if (status === 200) {
                    changeWfsResponse(data);
                    const time = new Date().getTime() - startGET;
                    switch (state.request) {
                        case requests[0]:
                            changeGetCapResp(dispatch, data, time);
                            break;
                        case requests[1]:
                            changeDescFeatTypeResp(dispatch, data, time);
                            break;
                        case requests[2]:
                            changeGetPropValResp(dispatch, data, time);
                            break;
                        default:
                    }
                }
            } catch (error) {
                const { response } = error;
                if (response) changeWfsResponse(handleErrorResponse(response));
            }
        }
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
                    onClick={handleClick}
                />
            </Col>
        </FormGroup>
    );
}
