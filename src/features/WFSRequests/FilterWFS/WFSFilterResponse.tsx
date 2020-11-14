import React from 'react';
import { FormGroup, Col, Label, Input } from 'reactstrap';

import { useAppContext } from '../../../context';
import TableButtons from '../TableButtons';
import sharedStyles from '../shared.module.sass';

const consts = {
    filterResponseMetadata:
        'Filtered Response - Metadata using Filter parameters:'
};

export default function WFSFilterResponse() {
    const { state } = useAppContext();
    const disabled = !state.getPropValResp || !state.getPropValFiltResp;
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
                />
                <TableButtons
                    disabled={disabled}
                    hasModal
                    label="Filter Response"
                    onClick={() => {}}
                />
            </Col>
        </FormGroup>
    );
}
