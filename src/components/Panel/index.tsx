import { useState } from 'react';
import { Card, CardHeader, CardBody, Collapse, CardTitle } from 'reactstrap';

import PanelProps from './model';
import styles from './index.module.sass';

export default function Panel({ content, header, title }: PanelProps) {
    const [isCardOpen, setIsCardOpen] = useState(true);

    const iconDirection = isCardOpen ? 'down' : 'right';

    const handleClick = () => setIsCardOpen(!isCardOpen);

    return (
        <Card outline color="primary" className="mb-4">
            <CardHeader className="card bg-primary text-white">
                <span>
                    {header}
                    <i
                        aria-label="Toggle card"
                        className={`fa fa-chevron-${iconDirection} ${styles.icon}`}
                        onClick={handleClick}
                        onKeyDown={() => {}}
                        role="button"
                        tabIndex={0}
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
}
