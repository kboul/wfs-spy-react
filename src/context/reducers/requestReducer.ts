import { toast } from 'react-toastify';

import { State, Action } from '../models';
import { requests, noOption } from '../../config/constants';

const toasts = {
    getCapDescFeatTypeFirst:
        'Please make a GetCapabilities and a DescribeFeatureType request first.',
    getCapFirst: 'Please make a GetCapabilities request first.',
    descFeatTypeFirst: 'Please make a DescribeFeatureType request first.',
    noTypAndValRef:
        'Please select typename & value reference to be able to perform a GetPropertyValue request.',
    noValRefer:
        'Please select a value reference to be able to perform a GetPropertyValue request.'
};

export default function requestReducer(state: State, action: Action): State {
    // ensure request order
    const { request } = action.payload;
    const { getCapResp, descFeatTypeResp, typename, valueReferences } = state;

    const noVarRefNames = Object.keys(valueReferences.names).length === 0;

    if (request === requests[2] && !descFeatTypeResp && !getCapResp) {
        toast.info(toasts.getCapDescFeatTypeFirst);
        return { ...state, request: requests[0] };
    }
    if (request === requests[1] && !getCapResp) {
        toast.info(toasts.getCapFirst);
        return { ...state, request: requests[0] };
    }
    if (request === requests[2] && !descFeatTypeResp) {
        toast.info(toasts.descFeatTypeFirst);
        return state;
    }
    if (request === requests[2] && typename === noOption && noVarRefNames) {
        toast.info(toasts.noTypAndValRef);
        return state;
    }
    if (request === requests[2] && noVarRefNames) {
        toast.info(toasts.noValRefer);
        return state;
    }
    return { ...state, request };
}
