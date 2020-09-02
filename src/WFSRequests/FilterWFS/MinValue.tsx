import React, { FC, useContext } from 'react';
import { FormGroup, Label, Col, Input } from 'reactstrap';

import Context from '../../context';
import { IContext } from '../../context/models';
import consts from './constants';
import sharedStyles from '../shared.module.sass';

const MinValue: FC = () => {
    const { state }: IContext = useContext(Context);
    return (
        <FormGroup row>
            <Label for="minValue" md={4} className={sharedStyles.labelFont}>
                {consts.minValue}
            </Label>
            <Col md={7}>
                <Input type="text" disabled value={state.minValue} />
            </Col>
        </FormGroup>
    );
};

export default MinValue;
