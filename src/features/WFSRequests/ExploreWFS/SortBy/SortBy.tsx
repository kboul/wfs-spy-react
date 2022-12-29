import { Col, FormGroup, Label, Input } from "reactstrap";

import { useAppContext } from "../../../../context";
import labels from "../labels";
import sharedStyles from "../../shared.module.sass";

export default function SortBy() {
  const { state } = useAppContext();
  return (
    <FormGroup row>
      <Label
        className={`${sharedStyles.labelFont} mb-2`}
        for={labels.sortBy}
        md={2}
      >
        {labels.sortBy}
      </Label>
      <Col md={9}>
        <Input disabled id={labels.sortBy} type="text" value={state.sortBy} />
      </Col>
    </FormGroup>
  );
}
