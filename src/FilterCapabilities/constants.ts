export default {
    header: 'Filter Capabilities',
    descr: `
        Lists the filters, or expressions, that are available to form query predicates, 
        for example, SpatialOperators (such as Equals, Touches) and ComparisonOperators 
        (such as LessThan, GreaterThan). The filters themselves are not included in the 
        GetCapabilities document.
    `,
    compOperHeader: 'Comparison Operators',
    compOperDescr: 'Informs which Comparison Operators are supported',
    spatOperHeader: 'Spatial Operators',
    spatOperDescr: 'Informs which Spatial Operators are supported',
    geomOperHeader: 'Geometry Operands',
    geomOperDescr: 'Informs which Geometry Operands are supported',
    tempOperandsHeader: 'Temporal Operands',
    tempOperandsDescr: 'Informs which Temporal Operands are supported',
    tempOperHeader: 'Temporal Operators',
    tempOperDescr: 'Informs which Temporal Operators are supported',
    funcHeader: 'Functions',
    funcDescr: 'Informs which Functions are supported'
};
