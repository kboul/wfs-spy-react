import React from 'react';
import { FormGroup, Col, Label, Input } from 'reactstrap';

import TableButtons from '../TableButtons';
import { useAppContext, changeState, types } from '../../../context';
import { proccessMessage } from '../../../config/constants';
import sharedStyles from '../shared.module.sass';

const consts = {
    filterResponseMetadata:
        'Filtered Response - Metadata using Filter parameters:'
};

export default function WFSFilterResponse() {
    const { state, dispatch } = useAppContext();

    const disabled = !state.getPropValResp || !state.wfsGetFiltReq;

    const changeWfsFilterResponse = (wfsResponse: string) => {
        dispatch(changeState(types.wfsFilterResponseChanged, { wfsResponse }));
    };

    const handleClick = () => {
        changeWfsFilterResponse(proccessMessage);
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
                    value={state.wfsGetFiltResp}
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
