import { FormGroup, Label, Col, Input } from "reactstrap";

import { useAppContext, changeState, types } from "../../../../context";
import { ChangeEvent } from "../../../../models/events";
import { isPropBetween } from "../../utils";
import globalConsts from "../../../../constants";
import sharedStyles from "../../shared.module.sass";

export const consts = { id: "numericValue", label: "Enter Value" };
const numericValueStyle = { backgroundColor: globalConsts.colors.lightPurple };

export default function NumericValue() {
  const { state, dispatch } = useAppContext();

  const handleChange = (e: ChangeEvent) => {
    const numericValue = e.target.value;
    dispatch(changeState(types.numericValueChanged, { numericValue }));
  };

  if (state.showNumericValue && !isPropBetween(state.compOper))
    return (
      <FormGroup row>
        <Label className={sharedStyles.labelFont} for={consts.id} md={4}>
          {consts.label}
        </Label>
        <Col md={7}>
          <Input
            disabled={!state.getPropValResp}
            id={consts.id}
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
