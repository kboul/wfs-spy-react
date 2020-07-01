import { toast } from 'react-toastify';
import { IState, IAction } from '../models';
import { requests } from '../../shared/constants';
import consts from '../constants';

const requestReducer = (state: IState, action: IAction) => {
    // ensure request order
    const { request } = action.payload;
    const { toasts } = consts;
    if (
        request === requests[2] &&
        !state.descFeatTypeResp &&
        !state.getCapResp
    ) {
        toast.info(toasts.getCapDescFeatTypeFirst);
        return { ...state, request: requests[0] };
    }
    if (request === requests[1] && !state.getCapResp) {
        toast.info(toasts.getCapFirst);
        return { ...state, request: requests[0] };
    }
    if (request === requests[2] && !state.descFeatTypeResp) {
        toast.info(toasts.descFeatTypeFirst);
        return { ...state, request: requests[1] };
    }
    return {
        ...state,
        request
    };
};

export default requestReducer;
