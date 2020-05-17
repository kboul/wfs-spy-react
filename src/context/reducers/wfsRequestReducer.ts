import { IState, IAction } from '../models';
import consts from '../constants';

const wfsRequestReducer = (state: IState, action: IAction) => {
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
};

export default wfsRequestReducer;
