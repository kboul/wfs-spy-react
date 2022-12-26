import { FormGroup, Label, Col, Input } from "reactstrap";

import { useAppContext } from "../../../../context";
import sharedStyles from "../../shared.module.sass";
import { id, label, labelStyle } from "./constants";

export default function SelectedTypValueRefer() {
  const { state } = useAppContext();
  return (
    <FormGroup row>
      <Label
        className={sharedStyles.labelFont}
        for="selectedTypValueRef"
        md={4}
        style={labelStyle}
      >
        {label}
      </Label>
      <Col md={7}>
        <Input
          className={sharedStyles.textarea}
          disabled
          id={id}
          rows="3"
          type="textarea"
          value={state.selectedTypValueRef}
        />
      </Col>
    </FormGroup>
  );
}
