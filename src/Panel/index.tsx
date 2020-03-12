import React, { FC, useState } from 'react';
import { Card, CardHeader, CardBody, CardText, Collapse } from 'reactstrap';
import PanelProps from './model';
import styles from './index.module.sass';

const Panel: FC<PanelProps> = ({ header, text }) => {
    const [isCardOpen, setIsCardOpen] = useState(true);
    const toggleCard = () => setIsCardOpen(!isCardOpen);

    const cardIcon = isCardOpen ? 'down' : 'right';

    return (
        <Card outline color="primary" className="mb-4" onClick={toggleCard}>
            <CardHeader
                className={`card bg-primary text-white ${styles.cardHeader}`}>
                <span>
                    {header}
                    <i
                        className={`fa fa-chevron-${cardIcon} float-right my-1`}
                    />
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
