import { Col, FormGroup, Label, Input } from "reactstrap";

import { useAppContext, changeState, types } from "../../../../context";
import useInputFocus from "../../../../hooks/useInputFocus";
import { ChangeEvent } from "../../../../models/events";
import sharedStyles from "../../shared.module.sass";
import labels from "../labels";
import styles from "./Url.module.sass";

const urlStyle = `${sharedStyles.labelFont} ${styles.url}`;

export default function Url() {
  const { urlRef, urlBackground, handleFocus, handleBlur } = useInputFocus();

  const { state, dispatch } = useAppContext();

  const handleChange = (e: ChangeEvent) =>
    dispatch(changeState(types.urlChanged, { url: e.target.value }));

  return (
    <FormGroup row>
      <Label className={urlStyle} for={labels.url} md={2}>
        {labels.url}
      </Label>
      <Col md={9}>
        <Input
          className={`${sharedStyles.textarea} form-control ${
            state.errors.url && "is-invalid"
          } `}
          id={labels.url}
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
