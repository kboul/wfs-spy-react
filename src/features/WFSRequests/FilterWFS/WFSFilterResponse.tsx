import React from 'react';
import axios from 'axios';
import { FormGroup, Col, Label, Input } from 'reactstrap';

import TableButtons from '../TableButtons';
import { useAppContext, changeState, types } from '../../../context';
import { adjustProxyToUrl, getTimeInMs, handleErrorResponse } from '../utils';
import formWfsFilterRequest from './utils';
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

    const handleClick = async () => {
        changeWfsFilterResponse(proccessMessage);
        const wfsRequest = adjustProxyToUrl(formWfsFilterRequest(state));
        const startGET = getTimeInMs();
        try {
            const { data, status } = await axios.get(wfsRequest);
            if (status === 200) {
                changeWfsFilterResponse(data);
                const time = getTimeInMs() - startGET;
                dispatch(
                    changeState(types.getPropValFiltRespChanged, {
                        getPropValFiltResp: data,
                        getGetPropValFiltTime: time
                    })
                );
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
                    onGetClick={handleClick}
                    onPostClick={() => {}}
                />
            </Col>
        </FormGroup>
    );
}
