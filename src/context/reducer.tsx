import { IState, IAction } from './models';
import types from './types';

const reducer = (state: IState, action: IAction) => {
    switch (action.type) {
        case types.SET_URL:
            return { ...state, url: action.payload };
        case types.SET_VERSION:
            return { ...state, version: action.payload };
        case types.SET_REQUEST:
            return { ...state, request: action.payload };
        case types.SET_TYPENAME:
            return { ...state, typename: action.payload };
        case types.SET_TYPENAMES:
            return { ...state, typenames: action.payload };
        case types.SET_WFS_REQUEST:
            return { ...state, wfsRequest: action.payload };
        case types.SET_WFS_RESPONSE:
            return { ...state, wfsResponse: action.payload };
        case types.SET_GET_CAP_RESPONSE:
            return { ...state, getCapResponse: action.payload };
        default:
            return state;
    }
};

export default reducer;
