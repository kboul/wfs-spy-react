import { Col } from "reactstrap";

import Panel from "../../../components/Panel";
import AttributeDetails from "./AttributeDetails";
import consts from "./constants";

export default function AttrNamesTypes() {
  return (
    <Col md={{ size: 8, offset: 2 }} className="mt-4">
      <h3>{consts.header}</h3>
      <p>{consts.descr}</p>

      <Panel
        content={<AttributeDetails />}
        header={consts.cardHeader}
        title={consts.cardTitle}
      />
    </Col>
  );
}
