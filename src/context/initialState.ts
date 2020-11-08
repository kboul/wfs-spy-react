import { versions, requests } from '../shared/constants';
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
    nonNumericValue: '',
    filtValueCount: '',
    compOper: '',
    lowerValue: '',
    upperValue: '',
    addSortBy: consts.addSortBy,
    getGetCapTime: 0,
    getGetCapNumber: 0,
    getDescFeatTypeTime: 0,
    getDescFeatTypeNumber: 0,
    getGetPropValTime: 0,
    getGetPropValNumber: 0
};

export default initialState;
