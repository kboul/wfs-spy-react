import React, { useContext } from 'react';
import { Col, FormGroup, Label, Input } from 'reactstrap';

import Context, { ContextProps } from '../../../context';
import { changeVersion } from '../../../context/actions';
import { versions } from '../../../shared/constants';
import { ChangeEvent } from '../../../shared/models';
import consts from './constants';
import sharedStyles from '../shared.module.sass';

const VersionInput = () => {
    const { state, dispatch } = useContext<ContextProps>(Context);

    const handleChange = (e: ChangeEvent) =>
        dispatch(changeVersion({ version: e.target.value }));

    return (
        <FormGroup row>
            <Label for="version" md={2} className={sharedStyles.labelFont}>
                {consts.version}
            </Label>
            <Col md={9}>
                <Input
                    type="select"
                    value={state.version}
                    onChange={handleChange}>
                    {versions.map(version => (
                        <option key={version}>{version}</option>
                    ))}
                </Input>
            </Col>
        </FormGroup>
    );
};

export default VersionInput;
