import React, { FC, useState } from 'react';
import { Card, CardHeader, CardBody, Collapse, CardTitle } from 'reactstrap';
import IPanel from './model';
import styles from './index.module.sass';

const Panel: FC<IPanel> = ({ header, title, content }: IPanel) => {
    const [isCardOpen, setIsCardOpen] = useState(true);

    const iconDirection = isCardOpen ? 'down' : 'right';

    const onClick = () => setIsCardOpen(!isCardOpen);

    return (
        <Card outline color="primary" className="mb-4">
            <CardHeader className="card bg-primary text-white">
                <span>
                    {header}
                    <i
                        aria-label="Toggle card"
                        className={`fa fa-chevron-${iconDirection} ${styles.icon}`}
                        onClick={onClick}
                        role="button"
                        tabIndex={0}
                        onKeyDown={() => {}}
                    />
                </span>
            </CardHeader>
            <Collapse isOpen={isCardOpen}>
                <CardBody>
                    <CardTitle>{title}</CardTitle>
                    {content}
                </CardBody>
            </Collapse>
        </Card>
    );
};

export default Panel;
