import { toast } from 'react-toastify';

import { State, Action } from '../models';
import { getCompOperList } from '../../shared/utils';
import { requests, noOption } from '../../shared/constants';
import consts from '../constants';

const urlValidation = 'Url is required';

const toasts = {
    noTypValueRef:
        'typename & valueReference are required to make a GetPropValue request.',
    noValueRef: 'valueReference is required to make a GetPropValue request.'
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

    const compOperList = getCompOperList(state.getCapResp);

    if (state.request === requests[0] && state.url) {
        return {
            ...stateObj,
            getCapResp: '',
            typename: '',
            typenames: [],
            valueReferences: consts.valueReferences,
            valueReference: '',
            descFeatTypeResp: '',
            getPropValResp: '',
            ...consts.revertGetPropValInputs
        };
    }
    if (state.request === requests[1] && state.typename) {
        return {
            ...stateObj,
            valueReference: '',
            valueReferences: consts.valueReferences,
            descFeatTypeResp: '',
            getPropValResp: '',
            ...consts.revertGetPropValInputs
        };
    }
    // typename exists but no valueReference
    if (
        state.request === requests[2] &&
        state.typename &&
        !state.valueReference
    ) {
        toast.info(toasts.noValueRef);
        return {
            ...stateObj,
            wfsRequest: ''
        };
    }
    // no typename & valueReference
    if (
        state.request === requests[2] &&
        state.typename === noOption &&
        !state.valueReference
    ) {
        toast.info(toasts.noTypValueRef);
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
        const selectedTypValueRef = `typeName: ${state.typename} \nvalueReference: ${state.valueReference}`;
        return {
            ...stateObj,
            ...consts.revertGetPropValInputs,
            selectedTypValueRef,
            getPropValResp: '',
            compOper: compOperList[0]
        };
    }
    return stateObj;
};

export default wfsRequestReducer;
