import { Container, Row } from 'reactstrap';

import ExploreWFS from './ExploreWFS';
import FilterWFS from './FilterWFS';
import WFSResponseModal from './components/WFSResponseModal';

export default function WFSRequests() {
    return (
        <>
            <Container fluid>
                <Row>
                    <ExploreWFS />
                    <FilterWFS />
                </Row>
                <WFSResponseModal />
            </Container>
        </>
    );
}
