import { requests, versions } from '../config/constants';
import consts from './constants';

const initialState = {
    url: '',
    version: versions[0],
    request: requests[0],
    service: 'WFS',
    typename: '',
    typenames: [],
    valueReference: '',
    valueReferences: consts.valueReferences,
    wfsRequest: '',
    wfsResponse: '',
    getCapResp: '',
    descFeatTypeResp: '',
    getPropValResp: '',
    getPropValFiltResp: '',
    sortBy: 'ASC',
    errors: {
        url: ''
    },
    selectedTypValueRef: '',
    valueCount: '',
    minValue: '',
    maxValue: '',
    numericValue: '',
    showNumericValue: false,
    nonNumericValue: [],
    showNonNumericValue: false,
    filterValueCount: '',
    compOper: '',
    lowerValue: '',
    upperValue: '',
    addSortBy: consts.addSortBy,
    wfsFilterRequest: '',
    wfsFilterResponse: '',
    getGetCapTime: 0,
    getGetCapNumber: 0,
    getDescFeatTypeTime: 0,
    getDescFeatTypeNumber: 0,
    getGetPropValTime: 0,
    getGetPropValNumber: 0,
    getGetPropValFiltTime: 0,
    getGetPropValFiltNumber: 0,
    attrValues: []
};

export default initialState;
