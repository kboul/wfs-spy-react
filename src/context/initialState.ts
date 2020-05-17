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
    sortBy: 'ASC',
    errors: {},
    getGetCapTime: 0,
    getGetCapNumber: 0,
    getDescFeatTypeTime: 0,
    getDescFeatTypeNumber: 0
};
