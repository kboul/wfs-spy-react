import React from 'react';
import { Col } from 'reactstrap';

import Panel from '../../../components/Panel';
import FeatureDetails from './FeatureDetails';
import { useWindowWidth } from '../../../hooks';
import { getSizeAndOffset } from '../../../utils';
import consts from './constants';

export default function FeatureTypeList() {
    const windowWidth = useWindowWidth();
    const { size, offset } = getSizeAndOffset(windowWidth);
    return (
        <Col md={{ size, offset }} className="mt-4">
            <h3>{consts.header}</h3>
            <p>{consts.descr}</p>

            <Panel
                content={<FeatureDetails />}
                header={consts.featTypeListHeader}
                title={consts.featTypeListText}
            />
        </Col>
    );
}
