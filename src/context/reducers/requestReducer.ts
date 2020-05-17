import { IState, IAction } from '../models';
import { requests } from '../../shared/constants';

const requestReducer = (state: IState, action: IAction) => {
    // ensure request order
    if (action.payload === requests[1] && !state.getCapResp) {
        return { ...state, request: requests[0] };
    }
    return {
        ...state,
        request: action.payload
    };
};

export default requestReducer;
