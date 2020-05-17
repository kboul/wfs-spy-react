import { IState, IAction } from './models';
import types from './types';
import requestReducer from './reducers/requestReducer';
import wfsRequestReducer from './reducers/wfsRequestReducer';
import getCapRespReducer from './reducers/getCapRespReducer';
import descFeatTypeRespReducer from './reducers/descFeatTypeRespReducer';
import initialState from './initialState';

const reducer = (state: IState, action: IAction) => {
    switch (action.type) {
        case types.SET_URL:
            return { ...state, url: action.payload };
        case types.SET_VERSION:
            return { ...state, version: action.payload };
        case types.SET_REQUEST:
            return requestReducer(state, action);
        case types.SET_TYPENAME:
            return { ...state, typename: action.payload };
        case types.SET_VALUE_REFERENCE:
            return { ...state, valueReference: action.payload };
        case types.SET_WFS_REQUEST:
            return wfsRequestReducer(state, action);
        case types.SET_WFS_RESPONSE:
            return { ...state, wfsResponse: action.payload };
        case types.SET_GET_CAP_RESPONSE:
            return getCapRespReducer(state, action);
        case types.SET_DESC_FEAT_TYPE_RESP:
            return descFeatTypeRespReducer(state, action);
        case types.RESET:
            return initialState;
        default:
            return state;
    }
};

export default reducer;
