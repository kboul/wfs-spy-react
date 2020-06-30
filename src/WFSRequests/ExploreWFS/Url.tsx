import React, { useContext, FC } from 'react';
import { Col, FormGroup, Label, Input } from 'reactstrap';
import Context from '../../context';
import useInputFocus from './hooks';
import { changeUrl } from '../../context/actions';
import { consts } from './constants';
import sharedStyles from '../shared.module.sass';
import styles from './index.module.sass';

const UrlInput: FC = () => {
    const urlStyle = `${sharedStyles.labelFont} ${styles.url}`;

    const { urlRef, urlBackgroud, onFocus, onBlur } = useInputFocus();

    const { state, dispatch } = useContext(Context);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
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
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
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
