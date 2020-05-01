import React, { FC } from 'react';
import { Col } from 'reactstrap';
import Panel from '../shared/Panel';
import IFeatureTypeList from './model';
import consts from './constants';

const FeatureTypeList: FC<IFeatureTypeList> = () => {
    return (
        <Col md={{ size: 8, offset: 2 }} className="mt-4">
            <h3>{consts.header}</h3>
            <p>{consts.descr}</p>

            <Panel
                header={consts.featTypeListHeader}
                title={consts.featTypeListText}
                content=""
            />
        </Col>
    );
};

export default FeatureTypeList;
