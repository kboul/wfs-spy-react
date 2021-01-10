import React from 'react';
import { Container, Row } from 'reactstrap';

import ExploreWFS from './ExploreWFS';
import FilterWFS from './FilterWFS';

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
