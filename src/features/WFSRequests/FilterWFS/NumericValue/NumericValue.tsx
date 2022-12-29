import { FormGroup, Label, Col, Input } from "reactstrap";

import { useAppContext, changeState, types } from "../../../../context";
import { ChangeEvent } from "../../../../models/events";
import { isPropBetween } from "../../../../utils";
import { id, label, numericValueStyle } from "./constants";
import sharedStyles from "../../shared.module.sass";

export default function NumericValue() {
  const { state, dispatch } = useAppContext();

  const handleChange = (e: ChangeEvent) => {
    const numericValue = e.target.value;
    dispatch(changeState(types.numericValueChanged, { numericValue }));
  };

  if (state.showNumericValue && !isPropBetween(state.compOper))
    return (
      <FormGroup row>
        <Label className={sharedStyles.labelFont} for={id} md={4}>
          {label}
        </Label>
        <Col md={7}>
          <Input
            disabled={!state.getPropValResp}
            id={id}
            onChange={handleChange}
            style={numericValueStyle}
            type="text"
            value={state.numericValue}
          />
        </Col>
      </FormGroup>
    );
  return null;
}
