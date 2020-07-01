import React, { FC, useContext } from 'react';
import { FormGroup, Label, Col, Input } from 'reactstrap';
import { IContext } from '../../context/models';
import Context from '../../context';
import consts from './constants';
import sharedStyles from '../shared.module.sass';

const ValueCount: FC = () => {
    const { state }: IContext = useContext(Context);
    return (
        <FormGroup row>
            <Label for="valueCount" md={4} className={sharedStyles.labelFont}>
                {consts.valueCount}
            </Label>
            <Col md={7}>
                <Input type="text" disabled value={state.valueCount} />
            </Col>
        </FormGroup>
    );
};

export default ValueCount;
