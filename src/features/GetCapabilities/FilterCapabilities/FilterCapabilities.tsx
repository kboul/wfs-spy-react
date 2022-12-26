import { Col, Row } from "reactstrap";

import { Panel } from "../../../components";
import CompOper from "./ComparisonOperators";
import SpatialOperators from "./SpatialOperators";
import GeometryOperands from "./GeometryOperands";
import TemporalOperands from "./TemporalOperands";
import TemporalOperators from "./TemporalOperators";
import Functions from "./Functions";
import { useWindowWidth } from "../../../hooks";
import { getSizeAndOffset } from "../../../utils";
import consts from "./constants";

export default function FilterCapabilities() {
  const windowWidth = useWindowWidth();
  const { size, offset } = getSizeAndOffset(windowWidth);
  return (
    <Col className="mt-4" md={{ size, offset }}>
      <h3>{consts.header}</h3>
      <p>{consts.descr}</p>

      <Row>
        <Col md="6">
          <Panel
            content={<CompOper />}
            header={consts.compOperCardHeader}
            title={consts.compOperCardTitle}
          />
        </Col>
        <Col md="6">
          <Panel
            content={<SpatialOperators />}
            header={consts.spatOperCardHeader}
            title={consts.spatOperCardTitle}
          />
        </Col>
      </Row>

      <Row>
        <Col md="4">
          <Panel
            content={<GeometryOperands />}
            header={consts.geomOperCardHeader}
            title={consts.geomOperCardTitle}
          />
        </Col>
        <Col md="4">
          <Panel
            content={<TemporalOperands />}
            header={consts.tempOperandsCardHeader}
            title={consts.tempOperandsCardTitle}
          />
        </Col>
        <Col md="4">
          <Panel
            content={<TemporalOperators />}
            header={consts.tempOperatorsCardHeader}
            title={consts.tempOperatorsCardTitle}
          />
        </Col>
      </Row>

      <Panel
        content={<Functions />}
        header={consts.funcCardHeader}
        title={consts.funcCardTitle}
      />
    </Col>
  );
}
