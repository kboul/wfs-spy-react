import { IState, IAction } from './models';
import types from './types';
import initialState from './initialState';
import consts from './constants';

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
            if (!state.url) {
                const errors = { ...state.errors };
                errors.url = consts.urlValidation;
                return { ...state, wfsRequest: '', errors };
            }
            const errors = { ...state.errors };
            errors.url = '';
            return { ...state, wfsRequest: action.payload, errors };
        case types.SET_WFS_RESPONSE:
            return { ...state, wfsResponse: action.payload };
        case types.SET_GET_CAP_RESPONSE:
            return { ...state, getCapResponse: action.payload };
        case types.RESET:
            return initialState;
        default:
            return state;
    }
};

export default reducer;
