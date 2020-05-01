import { IFuncs } from '../shared/models';

interface IFilterCapabilities {}

interface IComparisonOperators {
    compOper: string[];
}

interface ISpatialOperators {
    spatialOper: string[];
}

interface IGeometryOperands {
    geomOper: string[];
}

interface ITemporalOperands {
    tempOperands: string[];
}

interface ITemporalOperators {
    tempOperators: string[];
}

interface IFunctions {
    functions: IFuncs[];
}

export type {
    IFilterCapabilities,
    IComparisonOperators,
    ISpatialOperators,
    IGeometryOperands,
    ITemporalOperands,
    ITemporalOperators,
    IFunctions
};
