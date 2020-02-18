import React, { FC } from 'react';
import { Card, CardHeader, CardBody, CardText } from 'reactstrap';

interface PanelProps {
    header: string;
    text: string;
}

const Panel: FC<PanelProps> = ({ header, text }) => {
    return (
        <Card outline color="primary" className="mb-4">
            <CardHeader className="card bg-primary text-white">
                {header}
            </CardHeader>
            <CardBody>
                <CardText>{text}</CardText>
            </CardBody>
        </Card>
    );
};

export default Panel;
