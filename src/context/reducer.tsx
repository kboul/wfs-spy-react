import { IState, IAction } from './models';
import types from './types';
import initialState from './initialState';
import consts from './constants';
import { requests } from '../shared/constants';

const reducer = (state: IState, action: IAction) => {
    switch (action.type) {
        case types.SET_URL:
            return { ...state, url: action.payload };
        case types.SET_VERSION:
            return { ...state, version: action.payload };
        case types.SET_REQUEST:
            // ensure request order
            if (action.payload === requests[1] && !state.getCapResponse) {
                return { ...state, request: requests[0] };
            }
            return {
                ...state,
                request: action.payload
            };
        case types.SET_TYPENAME:
            return { ...state, typename: action.payload };
        case types.SET_WFS_REQUEST:
            const errors = { ...state.errors };
            if (!state.url) {
                errors.url = consts.urlValidation;
                return { ...state, wfsRequest: '', errors };
            }
            errors.url = '';
            return {
                ...state,
                wfsRequest: action.payload,
                wfsResponse: '',
                errors: { ...errors, url: '' }
            };
        case types.SET_WFS_RESPONSE:
            return { ...state, wfsResponse: action.payload };
        case types.SET_GET_CAP_RESPONSE:
            return {
                ...state,
                getCapResponse: action.payload.getCapResponse,
                typenames: action.payload.typenames,
                getGetCapTime: action.payload.getGetCapTime,
                getGetCapNumber: ++state.getGetCapNumber
            };
        case types.SET_DESC_FEAT_TYPE_RESP:
            return {
                ...state,
                descFeatTypeResp: action.payload.descFeatTypeResp,
                getDescFeatTypeTime: action.payload.getDescFeatTypeTime,
                getDescFeatTypeNumber: ++state.getDescFeatTypeNumber
            };
        case types.RESET:
            return initialState;
        default:
            return state;
    }
};

export default reducer;
