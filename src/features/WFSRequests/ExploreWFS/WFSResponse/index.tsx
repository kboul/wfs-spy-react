import React from 'react';
import axios from 'axios';
import { Col, FormGroup, Label, Input } from 'reactstrap';

import TableButtons from '../../TableButtons';
import {
    useAppContext,
    changeWfsResponse,
    changeGetCapResp,
    changeDescFeatTypeResp,
    changeGetPropValResp
} from '../../../../context';
import { extractTypenames } from '../../../../shared/wfsMetadata';
import { formWfsRequest } from '../utils';
import { adjustProxyToUrl } from './utils';
import WfsResponse from './model';
import { requests } from '../../../../shared/constants';
import consts from '../constants';
import sharedStyles from '../../shared.module.sass';

export default function WFSResponse() {
    const { state, dispatch } = useAppContext();

    const handleGetResponse = async () => {
        dispatch(changeWfsResponse({ wfsResponse: consts.processing }));
        const operationUrl = adjustProxyToUrl(formWfsRequest(state));
        if (operationUrl) {
            const startGET = new Date().getTime();
            const response: WfsResponse = await axios.get(operationUrl);
            if (response.status === 200) {
                const { data } = response;
                dispatch(changeWfsResponse({ wfsResponse: data }));
                const time = new Date().getTime() - startGET;
                switch (state.request) {
                    case requests[0]:
                        dispatch(
                            changeGetCapResp({
                                getCapResp: data,
                                typenames: extractTypenames(data),
                                getGetCapTime: time
                            })
                        );
                        break;
                    case requests[1]:
                        dispatch(
                            changeDescFeatTypeResp({
                                descFeatTypeResp: data,
                                getDescFeatTypeTime: time
                            })
                        );
                        break;
                    case requests[2]:
                        dispatch(
                            changeGetPropValResp({
                                getPropValResp: data,
                                getGetPropValTime: time
                            })
                        );
                        break;
                    default:
                }
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
                    onClick={handleGetResponse}
                />
            </Col>
        </FormGroup>
    );
}
