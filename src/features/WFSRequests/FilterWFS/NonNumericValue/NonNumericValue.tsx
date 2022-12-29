import { FormGroup, Label, Col } from "reactstrap";
import { Typeahead } from "react-bootstrap-typeahead";

import { useAppContext, changeState, types } from "../../../../context";
import { isPropBetween } from "../../../../utils";
import { id, label, nonNumerivValueStyle } from "./constants";
import sharedStyles from "../../shared.module.sass";

export default function NonNumericValue() {
  const { state, dispatch } = useAppContext();

  const handleChange = (value: string[]) =>
    dispatch(
      changeState(types.nonNumericValueChanged, {
        nonNumericValue: value
      })
    );

  if (state.showNonNumericValue && !isPropBetween(state.compOper))
    return (
      <FormGroup row>
        <Label className={sharedStyles.labelFont} for={id} md={4}>
          {label}
        </Label>
        <Col md={7}>
          <Typeahead
            disabled={!state.getPropValResp}
            id={id}
            inputProps={{ style: nonNumerivValueStyle }}
            onChange={handleChange}
            options={state.attrValues}
            placeholder="Type a value..."
            selected={state.nonNumericValue}
          />
        </Col>
      </FormGroup>
    );
  return null;
}
