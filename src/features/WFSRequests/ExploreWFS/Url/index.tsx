import React from 'react';
import { Col, FormGroup, Label, Input } from 'reactstrap';

import { useAppContext, changeUrl } from '../../../../context';
import useInputFocus from './hooks';
import { ChangeEvent } from '../../../../shared/models';
import consts from '../constants';
import sharedStyles from '../../shared.module.sass';
import styles from './index.module.sass';

const UrlInput = () => {
    const urlStyle = `${sharedStyles.labelFont} ${styles.url}`;

    const { urlRef, urlBackgroud, handleFocus, handleBlur } = useInputFocus();

    const { state, dispatch } = useAppContext();

    const handleChange = (e: ChangeEvent) =>
        dispatch(changeUrl({ url: e.target.value }));

    return (
        <FormGroup row>
            <Label for="url" md={2} className={urlStyle}>
                {consts.url}
            </Label>
            <Col md={9}>
                <Input
                    className={`${sharedStyles.textarea} form-control ${
                        state.errors.url && 'is-invalid'
                    } `}
                    type="textarea"
                    innerRef={urlRef}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    required
                    rows="3"
                    style={{ backgroundColor: urlBackgroud }}
                    value={state.url}
                />
                {state.errors.url && (
                    <div className="invalid-feedback">{state.errors.url}</div>
                )}
            </Col>
        </FormGroup>
    );
};

export default UrlInput;
