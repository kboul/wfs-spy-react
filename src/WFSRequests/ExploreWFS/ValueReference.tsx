import React, { useContext, FC } from 'react';
import { Col, FormGroup, Label, Input } from 'reactstrap';
import Context from '../../context';
import { consts } from './constants';
import sharedStyles from '../shared.module.sass';

const ValueReference: FC = () => {
    const { state } = useContext(Context);
    return (
        <FormGroup row>
            <Label for="valueRefer" md={2} className={sharedStyles.labelFont}>
                {consts.valueRefer}
            </Label>
            <Col md={9}>
                <Input
                    type="select"
                    disabled
                    value={state.valueRefer}
                    onChange={e => {}}
                />
            </Col>
        </FormGroup>
    );
};

export default ValueReference;
