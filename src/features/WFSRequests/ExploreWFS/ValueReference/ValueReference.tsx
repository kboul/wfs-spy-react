import { Col, FormGroup, Label, Input } from "reactstrap";

import { useAppContext, changeState, types } from "../../../../context";
import { getFullTypename, hasGeometry } from "../../../../utils";
import { ChangeEvent } from "../../../../models/events";
import labels from "../labels";
import sharedStyles from "../../shared.module.sass";

export default function ValueReference() {
  const { state, dispatch } = useAppContext();

  const handleChange = (e: ChangeEvent) => {
    const valueReference = e.target.value;
    dispatch(changeState(types.valueReferenceChanged, { valueReference }));
  };

  const { typename, valueReferences } = state;
  const fullTypename = getFullTypename(typename);
  const attrNamesList = valueReferences?.names[fullTypename];

  const disabled = (index: number) =>
    hasGeometry(valueReferences?.types[fullTypename][index]);

  return (
    <FormGroup row>
      <Label
        className={sharedStyles.labelFont}
        for={labels.valueReference}
        md={2}
      >
        {labels.valueReference}
      </Label>
      <Col md={9}>
        <Input
          disabled={!state.descFeatTypeResp}
          id={labels.valueReference}
          onChange={handleChange}
          type="select"
          value={state.valueReference}
        >
          {attrNamesList?.map((valueRefer: string, index: number) => (
            <option key={`value-reference-${index}`} disabled={disabled(index)}>
              {valueRefer}
            </option>
          ))}
        </Input>
      </Col>
    </FormGroup>
  );
}
