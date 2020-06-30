import { IState, IAction } from '../models';
import consts from '../constants';

const wfsRequestReducer = (state: IState, action: IAction) => {
    const errors = { ...state.errors };
    if (!state.url) {
        errors.url = consts.urlValidation;
        return { ...state, wfsRequest: '', errors };
    }
    return {
        ...state,
        wfsRequest: action.payload.wfsRequest,
        wfsResponse: '',
        errors: { ...errors, url: '' }
    };
};

export default wfsRequestReducer;
