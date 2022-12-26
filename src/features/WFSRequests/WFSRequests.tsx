import { Container, Row } from "reactstrap";

import ExploreWFS from "./ExploreWFS";
import FilterWFS from "./FilterWFS";
import WfsResponseModal from "./WFSResponseModal";

export default function WFSRequests() {
  return (
    <Container fluid>
      <Row>
        <ExploreWFS />
        <FilterWFS />
      </Row>
      <WfsResponseModal />
    </Container>
  );
}
