import React from 'react';
import axios from 'axios';
import { FormGroup, Col, Label, Input } from 'reactstrap';

import TableButtons from '../TableButtons';
import { useAppContext, changeState, types } from '../../../context';
import { adjustProxyToUrl } from '../utils';
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
        const operationUrl = adjustProxyToUrl(formWfsFilterRequest(state));
        if (operationUrl) {
            const startGET = new Date().getTime();
            const response = await axios.get(operationUrl);
            if (response.status === 200) {
                const { data } = response;
                changeWfsFilterResponse(data);
                const time = new Date().getTime() - startGET;
                dispatch(
                    changeState(types.getPropValFiltRespChanged, {
                        getPropValFiltResp: data,
                        getGetPropValFiltTime: time
                    })
                );
            }
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
                    onClick={handleClick}
                />
            </Col>
        </FormGroup>
    );
}
