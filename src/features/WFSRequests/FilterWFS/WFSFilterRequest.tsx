import React from 'react';
import { FormGroup, Col, Label, Input } from 'reactstrap';

import { useAppContext } from '../../../context';
import TableButtons from '../TableButtons';
import sharedStyles from '../shared.module.sass';

const consts = {
    formWfsFilterRequest: 'Form WFS GetPropertyValue Filter Request:'
};

export default function WFSFilterRequest() {
    const { state } = useAppContext();
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
                />
                <TableButtons
                    disabled={!state.getPropValResp}
                    label="Filter Request"
                    onClick={() => {}}
                />
            </Col>
        </FormGroup>
    );
}
