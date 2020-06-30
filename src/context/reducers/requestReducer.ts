import { IState, IAction } from '../models';
import { requests } from '../../shared/constants';

const requestReducer = (state: IState, action: IAction) => {
    // ensure request order
    const { request } = action.payload;
    if (request === requests[1] && !state.getCapResp) {
        return { ...state, request: requests[0] };
    }
    return {
        ...state,
        request
    };
};

export default requestReducer;
