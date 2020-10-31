import { toast } from 'react-toastify';
import { State, Action } from '../models';
import { requests, noOption } from '../../shared/constants';
import consts from '../constants';

const revertGetPropValInputs = {
    selectedTypValueRef: '',
    valueCount: '',
    minValue: '',
    maxValue: '',
    compOper: ''
};

const wfsRequestReducer = (state: State, action: Action) => {
    const errors = { ...state.errors };
    const stateObj = { ...state };

    if (!state.url) {
        errors.url = consts.urlValidation;
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
            ...revertGetPropValInputs
        };
    }
    // no typename & valueReference
    if (
        state.request === requests[2] &&
        state.typename === noOption &&
        !state.valueReference
    ) {
        toast.info(consts.toasts.typenameValueRef);
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
            ...revertGetPropValInputs,
            selectedTypValueRef,
            getPropValResp: ''
        };
    }
    return stateObj;
};

export default wfsRequestReducer;
