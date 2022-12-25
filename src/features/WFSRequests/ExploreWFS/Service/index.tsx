import { Col, FormGroup, Label, Input } from "reactstrap";

import { useAppContext } from "../../../../context";
import sharedStyles from "../../shared.module.sass";

export const consts = { label: "service" };

export default function Service() {
  const { state } = useAppContext();
  return (
    <FormGroup row>
      <Label className={sharedStyles.labelFont} for={consts.label} md={2}>
        {consts.label}
      </Label>
      <Col md={9}>
        <Input disabled id={consts.label} type="text" value={state.service} />
      </Col>
    </FormGroup>
  );
}
