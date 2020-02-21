import React, { FC } from 'react';
import { Col } from 'reactstrap';
import Panel from '../Panel';
import IStatistics from './model';
import { defaultProps } from './constants';

const Statistics: FC<IStatistics> = ({
    header,
    descr,
    respTimeHeader,
    respTimeDescr,
    reqTimeHeader,
    reqTimeDescr
}) => {
    return (
        <Col md={{ size: 8, offset: 2 }} className="mt-4">
            <h3>{header}</h3>
            <p>{descr}</p>

            <Panel header={respTimeHeader} text={respTimeDescr} />
            <Panel header={reqTimeHeader} text={reqTimeDescr} />
        </Col>
    );
};

Statistics.defaultProps = defaultProps;

export default Statistics;
