import React, { useContext } from 'react';
import { Col, FormGroup, Label, Input } from 'reactstrap';

import Context, { ContextProps } from '../../../../context';
import { changeUrl } from '../../../../context/actions';
import { ChangeEvent } from '../../../../shared/models';
import useInputFocus from './hooks';
import consts from '../constants';
import sharedStyles from '../../shared.module.sass';
import styles from './index.module.sass';

const UrlInput = () => {
    const urlStyle = `${sharedStyles.labelFont} ${styles.url}`;

    const { urlRef, urlBackgroud, handleFocus, handleBlur } = useInputFocus();

    const { state, dispatch } = useContext<ContextProps>(Context);

    const handleChange = (e: ChangeEvent) =>
        dispatch(changeUrl({ url: e.target.value }));

    return (
        <FormGroup row>
            <Label for="url" md={2} className={urlStyle}>
                {consts.url}
            </Label>
            <Col md={9}>
                <Input
                    type="textarea"
                    rows="3"
                    style={{ backgroundColor: urlBackgroud }}
                    className={`${sharedStyles.textarea} form-control ${
                        state.errors.url && 'is-invalid'
                    } `}
                    innerRef={urlRef}
                    value={state.url}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    required
                />
                {state.errors.url && (
                    <div className="invalid-feedback">{state.errors.url}</div>
                )}
            </Col>
        </FormGroup>
    );
};

export default UrlInput;
