import { toast } from 'react-toastify';
import { State, Action } from '../models';
import { requests } from '../../shared/constants';

const toasts = {
    getCapDescFeatTypeFirst:
        'Please make a GetCapabilities and a DescribeFeatureType request first.',
    getCapFirst: 'Please make a GetCapabilities request first.',
    descFeatTypeFirst: 'Please make a DescribeFeatureType request first.'
};

const requestReducer = (state: State, action: Action) => {
    // ensure request order
    const { request } = action.payload;
    const { getCapResp, descFeatTypeResp } = state;
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
        return { ...state, request: requests[1] };
    }
    return {
        ...state,
        request
    };
};

export default requestReducer;
