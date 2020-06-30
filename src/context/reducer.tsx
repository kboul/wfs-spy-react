import { IState, IAction } from './models';
import types from './actionTypes';
import requestReducer from './reducers/requestReducer';
import wfsRequestReducer from './reducers/wfsRequestReducer';
import getCapRespReducer from './reducers/getCapRespReducer';
import descFeatTypeRespReducer from './reducers/descFeatTypeRespReducer';
import initialState from './initialState';

const reducer = (state: IState, action: IAction) => {
    switch (action.type) {
        case types.urlChanged:
            return { ...state, url: action.payload.url };
        case types.versionChanged:
            return { ...state, version: action.payload.version };
        case types.requestChanged:
            return requestReducer(state, action);
        case types.typenameChanged:
            return { ...state, typename: action.payload.typename };
        case types.valueReferenceChanged:
            return { ...state, valueReference: action.payload.valueReference };
        case types.wfsRequestChanged:
            return wfsRequestReducer(state, action);
        case types.wfsResponseChanged:
            return { ...state, wfsResponse: action.payload.wfsResponse };
        case types.getCapRespChanged:
            return getCapRespReducer(state, action);
        case types.descFeatTypeRespChanged:
            return descFeatTypeRespReducer(state, action);
        case types.stateReset:
            return initialState;
        default:
            return state;
    }
};

export default reducer;
