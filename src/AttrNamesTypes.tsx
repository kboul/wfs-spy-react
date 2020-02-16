import React, { FC } from 'react';
import { Col, Card, CardHeader, CardBody, CardText } from 'reactstrap';

interface IAttrNamesTypes {}

const AttrNamesTypes: FC<IAttrNamesTypes> = () => {
    return (
        <Col md={{ size: 8, offset: 2 }} className="mt-4">
            <h3>Attribute Names & Types</h3>
            <p>
                This section provides metadata information derived from the
                DescribeFeatureType response. The displayed attribute names &
                types depend on the selected typename drop-down list from the
                Description / Filter tab.
            </p>

            <Card>
                <CardHeader className="card bg-secondary text-white">
                    Attribute Names & Types
                </CardHeader>
                <CardBody>
                    <CardText>
                        Provides information regarding the attribute names and
                        their types.
                    </CardText>
                </CardBody>
            </Card>
        </Col>
    );
};

export default AttrNamesTypes;
