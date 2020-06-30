import React, { useContext, FC } from 'react';
import { Col, FormGroup, Label, Input } from 'reactstrap';
import Context from '../../context';
import { changeVersion } from '../../context/actions';
import { versions } from '../../shared/constants';
import { consts } from './constants';
import sharedStyles from '../shared.module.sass';

const VersionInput: FC = () => {
    const { state, dispatch } = useContext(Context);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        dispatch(changeVersion({ version: e.target.value }));

    return (
        <FormGroup row>
            <Label for="version" md={2} className={sharedStyles.labelFont}>
                {consts.version}
            </Label>
            <Col md={9}>
                <Input type="select" value={state.version} onChange={onChange}>
                    {versions.map(version => (
                        <option key={version}>{version}</option>
                    ))}
                </Input>
            </Col>
        </FormGroup>
    );
};

export default VersionInput;
