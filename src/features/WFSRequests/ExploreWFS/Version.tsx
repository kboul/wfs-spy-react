import React from 'react';
import { Col, FormGroup, Label, Input } from 'reactstrap';

import { useAppContext, changeVersion } from '../../../context';
import { versions } from '../../../shared/constants';
import { ChangeEvent } from '../../../shared/models';
import consts from './constants';
import sharedStyles from '../shared.module.sass';

export default function Version() {
    const { state, dispatch } = useAppContext();

    const handleChange = (e: ChangeEvent) =>
        dispatch(changeVersion({ version: e.target.value }));

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
