import React, { FC, useContext } from 'react';
import { Col } from 'reactstrap';
import Context from '../context';
import Panel from '../Panel';
import CompOper from './ComparisonOperators';
import SpatialOperators from './SpatialOperators';
import {
    parseXML,
    extractFilterCap,
    extractFunctions
} from '../shared/wfsMetadata';
import { IFilterCapabilities } from './models';
import consts from './constants';
import GeometryOperands from './GeometryOperands';
import TemporalOperands from './TemporalOperands';
import TemporalOperators from './TemporalOperators';
import Functions from './Functions';

const FilterCapabilities: FC<IFilterCapabilities> = () => {
    const { state } = useContext(Context);
    const wfsResponse = parseXML(state.getCapResponse);
    const compOper = extractFilterCap(wfsResponse, 'ComparisonOperator');
    const spatialOper = extractFilterCap(wfsResponse, 'SpatialOperator');
    const geomOper = extractFilterCap(wfsResponse, 'GeometryOperand');
    const tempOperands = extractFilterCap(wfsResponse, 'TemporalOperand');
    const tempOperators = extractFilterCap(wfsResponse, 'TemporalOperator');
    const functions = extractFunctions(wfsResponse);

    return (
        <Col md={{ size: 8, offset: 2 }} className="mt-4">
            <h3>{consts.header}</h3>
            <p>{consts.descr}</p>

            <div className="row">
                <div className="col-md-6">
                    <Panel
                        header={consts.compOperHeader}
                        title={consts.compOperDescr}
                        content={<CompOper compOper={compOper} />}
                    />
                </div>
                <div className="col-md-6">
                    <Panel
                        header={consts.spatOperHeader}
                        title={consts.spatOperDescr}
                        content={<SpatialOperators spatialOper={spatialOper} />}
                    />
                </div>
            </div>

            <div className="row">
                <div className="col-md-4">
                    <Panel
                        header={consts.geomOperHeader}
                        title={consts.geomOperDescr}
                        content={<GeometryOperands geomOper={geomOper} />}
                    />
                </div>
                <div className="col-md-4">
                    <Panel
                        header={consts.tempOperandsHeader}
                        title={consts.tempOperandsDescr}
                        content={
                            <TemporalOperands tempOperands={tempOperands} />
                        }
                    />
                </div>
                <div className="col-md-4">
                    <Panel
                        header={consts.tempOperatorsHeader}
                        title={consts.tempOperatorsDescr}
                        content={
                            <TemporalOperators tempOperators={tempOperators} />
                        }
                    />
                </div>
            </div>

            <Panel
                header={consts.funcHeader}
                title={consts.funcDescr}
                content={<Functions functions={functions} />}
            />
        </Col>
    );
};

export default FilterCapabilities;
