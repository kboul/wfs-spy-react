import { versions, requests } from '../shared/constants';
import consts from './constants';

export default {
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
    sortBy: 'ASC',
    errors: {
        url: ''
    },
    selectedTypValueRef: '',
    valueCount: '',
    minValue: '',
    maxValue: '',
    getGetCapTime: 0,
    getGetCapNumber: 0,
    getDescFeatTypeTime: 0,
    getDescFeatTypeNumber: 0,
    getGetPropValTime: 0,
    getGetPropValNumber: 0
};
