import { FormGroup, Label, Col } from "reactstrap";
import { Typeahead } from "react-bootstrap-typeahead";

import { useAppContext, changeState, types } from "../../../../context";
import { isPropBetween } from "../../utils";
import globalConsts from "../../../../constants";
import sharedStyles from "../../shared.module.sass";

export const consts = { id: "nonNumericValue", label: "Search strings" };
const nonNumerivValueStyle = {
  backgroundColor: globalConsts.colors.lightPurple
};

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
        <Label className={sharedStyles.labelFont} for={consts.id} md={4}>
          {consts.label}
        </Label>
        <Col md={7}>
          <Typeahead
            disabled={!state.getPropValResp}
            id={consts.id}
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
