import { Col, FormGroup, Label, Input } from "reactstrap";

import { useAppContext } from "../../../../context";
import labels from "../labels";
import sharedStyles from "../../shared.module.sass";

export default function Service() {
  const { state } = useAppContext();
  return (
    <FormGroup row>
      <Label className={sharedStyles.labelFont} for={labels.service} md={2}>
        {labels.service}
      </Label>
      <Col md={9}>
        <Input disabled id={labels.service} type="text" value={state.service} />
      </Col>
    </FormGroup>
  );
}
