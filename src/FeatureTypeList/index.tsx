import React, { FC } from 'react';
import { Col } from 'reactstrap';
import IFeatureTypeList from './model';
import Panel from '../Panel';
import defaultProps from './constants';

const FeatureTypeList: FC<IFeatureTypeList> = ({
    header,
    wfsFeatTypeListHeader,
    wfsFeatTypeListText
}) => {
    return (
        <Col md={{ size: 8, offset: 2 }} className="mt-4">
            <h3>{header}</h3>

            <Panel header={wfsFeatTypeListHeader} text={wfsFeatTypeListText} />
        </Col>
    );
};

FeatureTypeList.defaultProps = defaultProps;

export default FeatureTypeList;
