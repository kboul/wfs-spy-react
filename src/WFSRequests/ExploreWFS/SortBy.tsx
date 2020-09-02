import React, { useContext, FC } from 'react';
import { Col, FormGroup, Label, Input } from 'reactstrap';

import Context from '../../context';
import { IContext } from '../../context/models';
import { consts } from './constants';
import sharedStyles from '../shared.module.sass';

const SortBy: FC = () => {
    const { state }: IContext = useContext(Context);
    return (
        <FormGroup row>
            <Label
                for="sortBy"
                md={2}
                className={`${sharedStyles.labelFont} mb-2`}>
                {consts.sortBy}
            </Label>
            <Col md={9}>
                <Input type="text" value={state.sortBy} disabled />
            </Col>
        </FormGroup>
    );
};

export default SortBy;
