import { FormGroup, Label, Col, Input } from "reactstrap";

import { useAppContext } from "../../../../context";
import sharedStyles from "../../shared.module.sass";
import { id, label } from "./constants";

export default function ValueCount() {
  const { state } = useAppContext();
  return (
    <FormGroup row>
      <Label className={sharedStyles.labelFont} for={id} md={4}>
        {label}
      </Label>
      <Col md={7}>
        <Input disabled id={id} type="text" value={state.valueCount} />
      </Col>
    </FormGroup>
  );
}
