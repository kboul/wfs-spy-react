import { FormGroup, Label, Col, Input } from "reactstrap";

import { useAppContext } from "../../../../context";
import { id, label } from "./constants";
import sharedStyles from "../../shared.module.sass";

export default function MaxValue() {
  const { state } = useAppContext();
  return (
    <FormGroup row>
      <Label for={id} md={4} className={sharedStyles.labelFont}>
        {label}
      </Label>
      <Col md={7}>
        <Input disabled id={id} type="text" value={state.maxValue} />
      </Col>
    </FormGroup>
  );
}
