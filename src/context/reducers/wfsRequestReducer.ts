import { toast } from 'react-toastify';

import { State, Action } from '../models';
import { requests, noOption } from '../../shared/constants';
import consts from '../constants';

const urlValidation = 'Url is required';
const revertGetPropValInputs = {
    selectedTypValueRef: '',
    valueCount: '',
    minValue: '',
    maxValue: '',
    compOper: '',
    addSortBy: consts.addSortBy
};
const toasts = {
    typenameValueRef:
        'Typename & valueReference are required to make a GetPropValue request.'
};

const wfsRequestReducer = (state: State, action: Action) => {
    const errors = { ...state.errors };
    const stateObj = { ...state };

    if (!state.url) {
        errors.url = urlValidation;
        return { ...stateObj, wfsRequest: '', wfsResponse: '', errors };
    }

    stateObj.wfsRequest = action.payload.wfsRequest;
    stateObj.wfsResponse = '';
    stateObj.errors = { ...errors, url: '' };
    stateObj.selectedTypValueRef = '';

    if (state.request === requests[0] && state.url) {
        return {
            ...stateObj,
            getCapResp: '',
            typename: '',
            typenames: [],
            valueReferences: consts.valueReferences,
            valueReference: '',
            descFeatTypeResp: '',
            ...revertGetPropValInputs
        };
    }
    if (state.request === requests[1] && state.typename) {
        return {
            ...stateObj,
            valueReference: '',
            valueReferences: consts.valueReferences,
            descFeatTypeResp: '',
            ...revertGetPropValInputs,
            compOper: state.compOper
        };
    }
    // no typename & valueReference
    if (
        state.request === requests[2] &&
        state.typename === noOption &&
        !state.valueReference
    ) {
        toast.info(toasts.typenameValueRef);
        return {
            ...stateObj,
            wfsRequest: ''
        };
    }
    if (
        state.request === requests[2] &&
        state.typename !== noOption &&
        state.valueReference
    ) {
        const selectedTypValueRef = `typeName: ${state.typename} \n valueReference: ${state.valueReference}`;
        return {
            ...stateObj,
            selectedTypValueRef,
            valueCount: '',
            minValue: '',
            maxValue: '',
            getPropValResp: ''
        };
    }
    return stateObj;
};

export default wfsRequestReducer;
