import { Col, FormGroup, Label, Input } from "reactstrap";

import { useAppContext, changeState, types } from "../../../../context";
import globalConsts from "../../../../constants";
import { ChangeEvent } from "../../../../models/events";
import sharedStyles from "../../shared.module.sass";

export const consts = { label: "version" };

export default function Version() {
  const { state, dispatch } = useAppContext();

  const handleChange = (e: ChangeEvent) => {
    const version = e.target.value;
    dispatch(changeState(types.versionChanged, { version }));
  };

  return (
    <FormGroup row>
      <Label className={sharedStyles.labelFont} for={consts.label} md={2}>
        {consts.label}
      </Label>
      <Col md={9}>
        <Input
          id={consts.label}
          onChange={handleChange}
          type="select"
          value={state.version}
        >
          {globalConsts.versions.map((version) => (
            <option key={version}>{version}</option>
          ))}
        </Input>
      </Col>
    </FormGroup>
  );
}
