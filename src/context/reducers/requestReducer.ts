import { toast } from 'react-toastify';
import { State, Action } from '../models';
import { requests } from '../../shared/constants';
import consts from '../constants';

const requestReducer = (state: State, action: Action) => {
    // ensure request order
    const { request } = action.payload;
    const { toasts } = consts;
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
