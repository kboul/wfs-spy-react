import { FormGroup, Label, Col, Input } from "reactstrap";

import { useAppContext, changeState, types } from "../../../../context";
import { ChangeEvent } from "../../../../models/events";
import { isPropBetween } from "../../../../utils";
import { id, label, lowerValueStyle } from "./constants";
import sharedStyles from "../../shared.module.sass";

export default function LowerValue() {
  const { state, dispatch } = useAppContext();

  const handleChange = (e: ChangeEvent) => {
    const lowerValue = e.target.value;
    dispatch(changeState(types.lowerValueChanged, { lowerValue }));
  };

  if (isPropBetween(state.compOper))
    return (
      <FormGroup row>
        <Label className={sharedStyles.labelFont} for={id} md={4}>
          {label}
        </Label>
        <Col md={7}>
          <Input
            autoFocus
            id={id}
            onChange={handleChange}
            style={lowerValueStyle}
            type="text"
            value={state.lowerValue}
          />
        </Col>
      </FormGroup>
    );
  return null;
}
