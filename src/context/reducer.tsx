import { IState, IAction } from './models';
import types from './actionTypes';
import requestReducer from './reducers/requestReducer';
import wfsRequestReducer from './reducers/wfsRequestReducer';
import getCapRespReducer from './reducers/getCapRespReducer';
import descFeatTypeRespReducer from './reducers/descFeatTypeRespReducer';
import getPropValRespReducer from './reducers/getPropValRespReducer';
import initialState from './initialState';

const reducer = (state: IState, action: IAction): IState => {
    switch (action.type) {
        case types.urlChanged: {
            const { url } = action.payload;
            return { ...state, url };
        }
        case types.versionChanged: {
            const { version } = action.payload;
            return { ...state, version };
        }
        case types.requestChanged:
            return requestReducer(state, action);
        case types.typenameChanged: {
            const { typename } = action.payload;
            return { ...state, typename };
        }
        case types.valueReferenceChanged: {
            const { valueReference } = action.payload;
            return { ...state, valueReference };
        }
        case types.wfsRequestChanged:
            return wfsRequestReducer(state, action);
        case types.wfsResponseChanged: {
            const { wfsResponse } = action.payload;
            return { ...state, wfsResponse };
        }
        case types.getCapRespChanged:
            return getCapRespReducer(state, action);
        case types.descFeatTypeRespChanged:
            return descFeatTypeRespReducer(state, action);
        case types.getPropValRespChanged:
            return getPropValRespReducer(state, action);
        case types.stateReset:
            return initialState;
        default:
            return state;
    }
};

export default reducer;
