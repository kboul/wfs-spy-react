import { Col, FormGroup, Label, Input } from 'reactstrap';

import { useAppContext, changeState, types } from '../../../../context';
import useInputFocus from './hooks';
import { ChangeEvent } from '../../../../models/events';
import sharedStyles from '../../shared.module.sass';
import styles from './index.module.sass';

const consts = { url: 'url' };

const urlStyle = `${sharedStyles.labelFont} ${styles.url}`;

export default function Url() {
    const { urlRef, urlBackground, handleFocus, handleBlur } = useInputFocus();

    const { state, dispatch } = useAppContext();

    const handleChange = (e: ChangeEvent) =>
        dispatch(changeState(types.urlChanged, { url: e.target.value }));

    return (
        <FormGroup row>
            <Label className={urlStyle} for={consts.url} md={2}>
                {consts.url}
            </Label>
            <Col md={9}>
                <Input
                    className={`${sharedStyles.textarea} form-control ${
                        state.errors.url && 'is-invalid'
                    } `}
                    id={consts.url}
                    innerRef={urlRef}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    required
                    rows="3"
                    style={{ backgroundColor: urlBackground }}
                    type="textarea"
                    value={state.url}
                />
                {state.errors.url && (
                    <div className="invalid-feedback">{state.errors.url}</div>
                )}
            </Col>
        </FormGroup>
    );
}
