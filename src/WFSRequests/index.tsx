import React, { FC } from 'react';
import { Container, Row } from 'reactstrap';
import FilterWFS from './FilterWFS';
import ExploreWFS from './ExploreWFS';

interface IWFSRequests {}

const WFSRequests: FC<IWFSRequests> = () => {
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
};

export default WFSRequests;
