import { Container, Row } from 'reactstrap';

import ExploreWFS from './ExploreWFS';
import FilterWFS from './FilterWFS';
import { WfsResponseModal } from './components';

export default function WfsRequests() {
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
