import { FormGroup, Label, Col, Input } from "reactstrap";

import { useAppContext } from "../../../../context";
import sharedStyles from "../../shared.module.sass";

export const consts = { id: "maxValue", label: "Maximum value" };

export default function MaxValue() {
  const { state } = useAppContext();
  return (
    <FormGroup row>
      <Label for={consts.id} md={4} className={sharedStyles.labelFont}>
        {consts.label}
      </Label>
      <Col md={7}>
        <Input disabled id={consts.id} type="text" value={state.maxValue} />
      </Col>
    </FormGroup>
  );
}
