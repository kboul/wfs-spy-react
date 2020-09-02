import React, { FC, useContext } from 'react';
import { FormGroup, Label, Col, Input } from 'reactstrap';

import Context from '../../context';
import { IContext } from '../../context/models';
import consts from './constants';
import styles from './index.module.sass';
import sharedStyles from '../shared.module.sass';

const SelectedTypValueRefer: FC = () => {
    const selectedTypValueRef = `${sharedStyles.labelFont} ${styles.selectedTypValueRef}`;

    const { state }: IContext = useContext(Context);

    return (
        <FormGroup row>
            <Label
                for="selectedTypValueRef"
                md={4}
                className={selectedTypValueRef}>
                {consts.selectedTypValueRef}
            </Label>
            <Col md={7}>
                <Input
                    type="textarea"
                    rows="3"
                    className={sharedStyles.textarea}
                    disabled
                    value={state.selectedTypValueRef}
                />
            </Col>
        </FormGroup>
    );
};

export default SelectedTypValueRefer;
