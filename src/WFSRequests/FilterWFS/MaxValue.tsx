import React, { FC, useContext } from 'react';
import { FormGroup, Label, Col, Input } from 'reactstrap';

import Context from '../../context';
import { IContext } from '../../context/models';
import consts from './constants';
import sharedStyles from '../shared.module.sass';

const MaxValue: FC = () => {
    const { state }: IContext = useContext(Context);
    return (
        <FormGroup row>
            <Label for="maxValue" md={4} className={sharedStyles.labelFont}>
                {consts.maxValue}
            </Label>
            <Col md={7}>
                <Input type="text" disabled value={state.maxValue} />
            </Col>
        </FormGroup>
    );
};

export default MaxValue;
