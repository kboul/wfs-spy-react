import { Col } from "reactstrap";

import Panel from "../../../components/Panel/Panel";
import ServiceIdDetails from "./ServiceIdDetails";
import consts from "./constants";

export default function ServiceIdentification() {
  return (
    <Col md={{ size: 8, offset: 2 }} className="mt-4">
      <h3>{consts.header}</h3>
      <p>{consts.descr}</p>

      <Panel
        content={<ServiceIdDetails />}
        header={consts.cardHeader}
        title={consts.cardTitle}
      />
    </Col>
  );
}
