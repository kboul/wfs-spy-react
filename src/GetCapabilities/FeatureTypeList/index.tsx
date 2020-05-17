import React, { FC, useContext } from 'react';
import { Col } from 'reactstrap';
import Context from '../../context';
import Panel from '../../shared/Panel';
import FeatureDetails from './FeatureDetails';
import { IFeatureTypeList } from './models';
import { extractFeatureTypes, parseXML } from '../../shared/wfsMetadata';
import consts from './constants';

const FeatureTypeList: FC<IFeatureTypeList> = () => {
    const { state } = useContext(Context);
    const getCapResp = parseXML(state.getCapResp);
    const features = extractFeatureTypes(getCapResp);

    return (
        <Col md={{ size: 8, offset: 2 }} className="mt-4">
            <h3>{consts.header}</h3>
            <p>{consts.descr}</p>

            <Panel
                header={consts.featTypeListHeader}
                title={consts.featTypeListText}
                content={<FeatureDetails features={features} />}
            />
        </Col>
    );
};

export default FeatureTypeList;
