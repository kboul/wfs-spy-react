import { noOperation } from '../shared/constants';

const compOper = 'Comparison Operators';
const spatOper = 'Spatial Operators';
const geomOper = 'Geometry Operands';
const tempOperands = 'Temporal Operands';
const tempOperators = 'Temporal Operators';
const functions = 'Functions';

export default {
    header: 'Filter Capabilities',
    descr: `
        Lists the filters, or expressions, that are available to form query predicates, 
        for example, SpatialOperators (such as Equals, Touches) and ComparisonOperators 
        (such as LessThan, GreaterThan). The filters themselves are not included in the 
        GetCapabilities document.
    `,
    compOperHeader: compOper,
    compOperDescr: 'Informs which Comparison Operators are supported',
    spatOperHeader: spatOper,
    spatOperDescr: 'Informs which Spatial Operators are supported',
    geomOperHeader: geomOper,
    geomOperDescr: 'Informs which Geometry Operands are supported',
    tempOperandsHeader: tempOperands,
    tempOperandsDescr: 'Informs which Temporal Operands are supported',
    tempOperatorsHeader: tempOperators,
    tempOperatorsDescr: 'Informs which Temporal Operators are supported',
    funcHeader: functions,
    funcDescr: 'Informs which Functions are supported',
    funcName: 'Function',
    funcReturns: 'Returns',
    funcArgsAndTypes: 'Arguments & Types',
    noCompOper: `${noOperation} ${compOper}.`,
    noSpatialOper: `${noOperation} ${spatOper}.`,
    noGeomOper: `${noOperation} ${geomOper}.`,
    noTempOperands: `${noOperation} ${tempOperands}.`,
    noTempOperators: `${noOperation} ${tempOperators}.`,
    noFunctions: `${noOperation} ${functions}.`
};
