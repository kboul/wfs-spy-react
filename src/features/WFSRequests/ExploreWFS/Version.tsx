import React from 'react';
import { Col, FormGroup, Label, Input } from 'reactstrap';

import { useAppContext, changeState, types } from '../../../context';
import { versions } from '../../../shared/constants';
import { ChangeEvent } from '../../../shared/models';
import sharedStyles from '../shared.module.sass';

const consts = { version: 'version' };

export default function Version() {
    const { state, dispatch } = useAppContext();

    const handleChange = (e: ChangeEvent) => {
        const version = e.target.value;
        dispatch(changeState(types.versionChanged, { version }));
    };

    return (
        <FormGroup row>
            <Label className={sharedStyles.labelFont} for="version" md={2}>
                {consts.version}
            </Label>
            <Col md={9}>
                <Input
                    onChange={handleChange}
                    type="select"
                    value={state.version}>
                    {versions.map(version => (
                        <option key={version}>{version}</option>
                    ))}
                </Input>
            </Col>
        </FormGroup>
    );
}
