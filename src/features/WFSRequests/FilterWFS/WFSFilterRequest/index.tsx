import React from 'react';
import { FormGroup, Col, Label, Input } from 'reactstrap';

import TableButtons from '../../components/TableButtons';
import { useAppContext, changeState, types } from '../../../../context';
import { formGetFilterRequest, formPostFilterRequest } from '../utils';
import validateFiltReqBtn from './utils';
import { isMethodGet } from '../../utils';
import sharedStyles from '../../shared.module.sass';

const consts = {
    formWfsFilterRequest: 'Form WFS GetPropertyValue Filter Request:'
};

export default function WFSFilterRequest() {
    const { state, dispatch } = useAppContext();

    const handleClick = (httpMethod: string) => {
        const wfsFilterRequest = isMethodGet(httpMethod)
            ? formGetFilterRequest(state)
            : formPostFilterRequest(state);
        dispatch(
            changeState(types.wfsFilterRequestChanged, { wfsFilterRequest })
        );
    };

    return (
        <FormGroup className="text-center" row>
            <Col md={{ size: 10, offset: 1 }}>
                <Label
                    className={sharedStyles.labelFont}
                    for="formWfsFilterRequest">
                    {consts.formWfsFilterRequest}
                </Label>
                <Input
                    className={sharedStyles.textarea}
                    disabled
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
