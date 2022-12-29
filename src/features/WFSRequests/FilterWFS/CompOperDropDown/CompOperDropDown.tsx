import { FormGroup, Label, Col, Input } from "reactstrap";

import { useAppContext, changeState, types } from "../../../../context";
import { getCompOperList, isPropBetween } from "../../../../utils";
import { ChangeEvent } from "../../../../models/events";
import { id, label } from "./constants";
import sharedStyles from "../../shared.module.sass";

export default function CompOperDropDown() {
  const { state, dispatch } = useAppContext();
  const compOperList = getCompOperList(state.getCapResp);

  const handleChange = (e: ChangeEvent) => {
    const compOper = e.target.value;
    dispatch(changeState(types.compOperChanged, { compOper }));
    if (isPropBetween(state.compOper))
      return dispatch(changeState(types.numericNonNumericValuesReset, {}));
    return dispatch(changeState(types.lowerUpperValuesReset, {}));
  };

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
          type="select"
          value={state.compOper}
        >
          {compOperList.map((compOper) => (
            <option key={compOper}>{compOper}</option>
          ))}
        </Input>
      </Col>
    </FormGroup>
  );
}
