import { FormGroup, Label, Col, Input } from "reactstrap";

import { useAppContext, changeState, types } from "../../../../context";
import { ChangeEvent } from "../../../../models/events";
import { isPropBetween } from "../../../../utils";
import { id, label, upperValueStyle } from "./constants";
import sharedStyles from "../../shared.module.sass";

export default function UpperValue() {
  const { state, dispatch } = useAppContext();

  const handleChange = (e: ChangeEvent) => {
    const upperValue = e.target.value;
    dispatch(changeState(types.upperValueChanged, { upperValue }));
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
            style={upperValueStyle}
            type="text"
            value={state.upperValue}
          />
        </Col>
      </FormGroup>
    );
  return null;
}
