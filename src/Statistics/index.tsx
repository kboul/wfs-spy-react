import React, { FC } from 'react';
import { Col } from 'reactstrap';
import Panel from '../Panel';
import IStatistics from './model';
import consts from './constants';

const Statistics: FC<IStatistics> = () => {
    return (
        <Col md={{ size: 8, offset: 2 }} className="mt-4">
            <h3>{consts.header}</h3>
            <p>{consts.descr}</p>

            <Panel header={consts.respTimeHeader} text={consts.respTimeDescr} />
            <Panel header={consts.reqTimeHeader} text={consts.reqTimeDescr} />
        </Col>
    );
};

export default Statistics;