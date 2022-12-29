import { FormGroup, Label, Col, Input } from "reactstrap";

import { useAppContext, changeState, types } from "../../../../context";
import { ChangeEvent } from "../../../../models/events";
import { id, label, options } from "./constants";
import sharedStyles from "../../shared.module.sass";

export default function AddSortByASC() {
  const { state, dispatch } = useAppContext();

  const handleChange = (e: ChangeEvent) => {
    const addSortBy = e.target.value;
    dispatch(changeState(types.addSortByChanged, { addSortBy }));
  };

  return (
    <FormGroup row>
      <Label className={`${sharedStyles.labelFont} mb-2`} for={id} md={4}>
        {label}
      </Label>
      <Col md={7}>
        <Input
          disabled={!state.getPropValResp}
          id={id}
          onChange={handleChange}
          type="select"
          value={state.addSortBy}
        >
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </Input>
      </Col>
    </FormGroup>
  );
}
