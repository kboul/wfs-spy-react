import React from 'react';
import { Container, Row } from 'reactstrap';

import FilterWFS from './FilterWFS';
import ExploreWFS from './ExploreWFS';

export default function WFSRequests() {
    return (
        <>
            <Container fluid>
                <Row>
                    <ExploreWFS />
                    <FilterWFS />
                </Row>
            </Container>
        </>
    );
}
