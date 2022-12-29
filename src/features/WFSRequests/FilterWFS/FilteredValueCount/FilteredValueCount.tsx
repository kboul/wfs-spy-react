import { FormGroup, Label, Col, Input } from "reactstrap";

import { useAppContext } from "../../../../context";
import { id, label } from "./constants";
import sharedStyles from "../../shared.module.sass";

export default function FilteredValueCount() {
  const { state } = useAppContext();
  return (
    <FormGroup row>
      <Label className={sharedStyles.labelFont} for={id} md={4}>
        {label}
      </Label>
      <Col md={7}>
        <Input disabled id={id} type="text" value={state.filterValueCount} />
      </Col>
    </FormGroup>
  );
}
