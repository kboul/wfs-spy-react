import { AttrNamesTypes } from '../shared/models';

interface State {
    url: string;
    version: string;
    request: string;
    service: string;
    typename: string;
    typenames: string[];
    valueReference: string;
    valueReferences: AttrNamesTypes;
    wfsRequest: string;
    wfsResponse: string;
    getCapResp: string;
    descFeatTypeResp: string;
    getPropValResp: string;
    getPropValFiltResp: string;
    sortBy: string;
    errors: {
        url: string;
    };
    selectedTypValueRef: string;
    valueCount: string;
    minValue: string | undefined;
    maxValue: string | undefined;
    compOper: string;
    addSortBy: string;
    getGetCapTime: number;
    getGetCapNumber: number;
    getDescFeatTypeTime: number;
    getDescFeatTypeNumber: number;
    getGetPropValTime: number;
    getGetPropValNumber: number;
}

interface Action {
    type: string;
    payload: {
        [property: string]: any;
    };
}

export type { State, Action };
