import { Col } from 'reactstrap';

import Panel from '../../../components/Panel';
import CompOper from './ComparisonOperators';
import SpatialOperators from './SpatialOperators';
import GeometryOperands from './GeometryOperands';
import TemporalOperands from './TemporalOperands';
import TemporalOperators from './TemporalOperators';
import Functions from './Functions';
import { useWindowWidth } from '../../../hooks';
import { getSizeAndOffset } from '../../../utils';
import consts from './constants';

export default function FilterCapabilities() {
    const windowWidth = useWindowWidth();
    const { size, offset } = getSizeAndOffset(windowWidth);
    return (
        <Col className="mt-4" md={{ size, offset }}>
            <h3>{consts.header}</h3>
            <p>{consts.descr}</p>

            <div className="row">
                <div className="col-md-6">
                    <Panel
                        content={<CompOper />}
                        header={consts.compOperHeader}
                        title={consts.compOperDescr}
                    />
                </div>
                <div className="col-md-6">
                    <Panel
                        content={<SpatialOperators />}
                        header={consts.spatOperHeader}
                        title={consts.spatOperDescr}
                    />
                </div>
            </div>

            <div className="row">
                <div className="col-md-4">
                    <Panel
                        content={<GeometryOperands />}
                        header={consts.geomOperHeader}
                        title={consts.geomOperDescr}
                    />
                </div>
                <div className="col-md-4">
                    <Panel
                        content={<TemporalOperands />}
                        header={consts.tempOperandsHeader}
                        title={consts.tempOperandsDescr}
                    />
                </div>
                <div className="col-md-4">
                    <Panel
                        content={<TemporalOperators />}
                        header={consts.tempOperatorsHeader}
                        title={consts.tempOperatorsDescr}
                    />
                </div>
            </div>

            <Panel
                content={<Functions />}
                header={consts.funcHeader}
                title={consts.funcDescr}
            />
        </Col>
    );
}
