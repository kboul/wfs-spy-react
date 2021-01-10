import { AttrNamesTypes } from '../wfsMetadata/models';

interface State {
    url: string;
    version: string;
    request: string;
    service: string;
    typename: string;
    typenames: string[];
    valueReference: string;
    valueReferences: AttrNamesTypes;
    xmlNamespaces: any;
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
    numericValue: string;
    showNumericValue: boolean;
    nonNumericValue: string[];
    showNonNumericValue: boolean;
    filterValueCount: string;
    compOper: string;
    lowerValue: string;
    upperValue: string;
    addSortBy: string;
    wfsFilterRequest: string;
    wfsFilterResponse: string;
    getGetCapTime: number;
    getGetCapNumber: number;
    postGetCapTime: number;
    postGetCapNumber: number;
    getDescFeatTypeTime: number;
    postDescFeatTypeTime: number;
    getDescFeatTypeNumber: number;
    postDescFeatTypeNumber: number;
    getGetPropValTime: number;
    getGetPropValNumber: number;
    getGetPropValFiltTime: number;
    getGetPropValFiltNumber: number;
    attrValues: string[];
}

interface Action {
    type: string;
    payload: {
        [property: string]: any;
    };
}

export type { State, Action };
