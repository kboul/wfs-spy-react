import globalConsts from '../../../constants';

const { noOperation } = globalConsts;

const compOperCardHeader = 'Comparison Operators';
const spatOperCardHeader = 'Spatial Operators';
const geomOperCardHeader = 'Geometry Operands';
const tempOperandsCardHeader = 'Temporal Operands';
const tempOperatorsCardHeader = 'Temporal Operators';
const funcCardHeader = 'Functions';

export default {
    header: 'Filter Capabilities',
    descr:
        'Lists the filters, or expressions, that are available to form query predicates, for example, SpatialOperators (such as Equals, Touches) and ComparisonOperators (such as LessThan, GreaterThan). The filters themselves are not included in the GetCapabilities document.',
    compOperCardHeader,
    compOperCardTitle: 'Informs which Comparison Operators are supported',
    spatOperCardHeader,
    spatOperCardTitle: 'Informs which Spatial Operators are supported',
    geomOperCardHeader,
    geomOperCardTitle: 'Informs which Geometry Operands are supported',
    tempOperandsCardHeader,
    tempOperandsCardTitle: 'Informs which Temporal Operands are supported',
    tempOperatorsCardHeader,
    tempOperatorsCardTitle: 'Informs which Temporal Operators are supported',
    funcCardHeader,
    funcCardTitle: 'Informs which Functions are supported',
    funcName: 'Function',
    funcReturns: 'Returns',
    funcArgsAndTypes: 'Arguments & Types',
    noCompOperMsg: `${noOperation} ${compOperCardHeader}.`,
    noSpatialOperMsg: `${noOperation} ${spatOperCardHeader}.`,
    noGeomOperMsg: `${noOperation} ${geomOperCardHeader}.`,
    noTempOperandsMsg: `${noOperation} ${tempOperandsCardHeader}.`,
    noTempOperatorsMsg: `${noOperation} ${tempOperatorsCardHeader}.`,
    noFunctionsMsg: `${noOperation} ${funcCardHeader}.`
};
