import React, { FC, useState } from 'react';
import { Card, CardHeader, CardBody, CardText, Collapse } from 'reactstrap';

interface PanelProps {
    header: string;
    text: string;
}

const cardHeaderStyle = { cursor: 'pointer' };

const Panel: FC<PanelProps> = ({ header, text }) => {
    const [isCardOpen, setIsOpen] = useState(true);
    const toggleCard = () => setIsOpen(!isCardOpen);

    const cardIcon = isCardOpen ? 'down' : 'right';

    return (
        <Card outline color="primary" className="mb-4" onClick={toggleCard}>
            <CardHeader
                className="card bg-primary text-white"
                style={cardHeaderStyle}>
                <span>
                    {header}
                    <i className={`fa fa-chevron-${cardIcon} float-right`} />
                </span>
            </CardHeader>
            <Collapse isOpen={isCardOpen}>
                <CardBody>
                    <CardText>{text}</CardText>
                </CardBody>
            </Collapse>
        </Card>
    );
};

export default Panel;
