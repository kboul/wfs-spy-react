import React from 'react';
import { Col, FormGroup, Label, Input } from 'reactstrap';

import { useAppContext, changeVersion } from '../../../context';
import { versions } from '../../../shared/constants';
import { ChangeEvent } from '../../../shared/models';
import consts from './constants';
import sharedStyles from '../shared.module.sass';

const VersionInput = () => {
    const { state, dispatch } = useAppContext();

    const handleChange = (e: ChangeEvent) =>
        dispatch(changeVersion({ version: e.target.value }));

    return (
        <FormGroup row>
            <Label for="version" md={2} className={sharedStyles.labelFont}>
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
};

export default VersionInput;
