import React, { FC } from 'react';
import { Col } from 'reactstrap';

import Panel from '../../shared/Panel';
import CompOper from './ComparisonOperators';
import SpatialOperators from './SpatialOperators';
import GeometryOperands from './GeometryOperands';
import TemporalOperands from './TemporalOperands';
import TemporalOperators from './TemporalOperators';
import Functions from './Functions';
import consts from './constants';

const FilterCapabilities: FC = () => {
    return (
        <Col md={{ size: 8, offset: 2 }} className="mt-4">
            <h3>{consts.header}</h3>
            <p>{consts.descr}</p>

            <div className="row">
                <div className="col-md-6">
                    <Panel
                        header={consts.compOperHeader}
                        title={consts.compOperDescr}
                        content={<CompOper />}
                    />
                </div>
                <div className="col-md-6">
                    <Panel
                        header={consts.spatOperHeader}
                        title={consts.spatOperDescr}
                        content={<SpatialOperators />}
                    />
                </div>
            </div>

            <div className="row">
                <div className="col-md-4">
                    <Panel
                        header={consts.geomOperHeader}
                        title={consts.geomOperDescr}
                        content={<GeometryOperands />}
                    />
                </div>
                <div className="col-md-4">
                    <Panel
                        header={consts.tempOperandsHeader}
                        title={consts.tempOperandsDescr}
                        content={<TemporalOperands />}
                    />
                </div>
                <div className="col-md-4">
                    <Panel
                        header={consts.tempOperatorsHeader}
                        title={consts.tempOperatorsDescr}
                        content={<TemporalOperators />}
                    />
                </div>
            </div>

            <Panel
                header={consts.funcHeader}
                title={consts.funcDescr}
                content={<Functions />}
            />
        </Col>
    );
};

export default FilterCapabilities;
