import { toast } from 'react-toastify';

import { State, Action } from '../models';
import { getCompOperList, getValRefType } from '../../utils';
import globalConsts from '../../constants';
import consts from '../constants';

const urlValidation = 'Url is required';

const toasts = {
    noTypValueRef:
        'typename & valueReference are required to make a GetPropValue request.',
    noValueRef: 'valueReference is required to make a GetPropValue request.'
};

const nonNumericTypes = ['string', 'date', 'dateTime'];
const numericTypes = [
    'int',
    'double',
    'decimal',
    'float',
    'long',
    'short',
    'hexBinary'
];

export default function wfsRequestReducer(state: State, action: Action) {
    const errors = { ...state.errors };
    const newState = { ...state };

    if (!state.url) {
        errors.url = urlValidation;
        return { ...newState, wfsRequest: '', wfsResponse: '', errors };
    }

    newState.wfsRequest = action.payload.wfsRequest;
    newState.wfsResponse = '';
    newState.errors = { ...errors, url: '' };
    newState.selectedTypValueRef = '';
    newState.getRequestClicked = action.payload.getRequestClicked;
    newState.postRequestClicked = action.payload.postRequestClicked;

    const compOperList = getCompOperList(state.getCapResp);

    const { noOption, requests } = globalConsts;

    if (state.request === requests[0] && state.url) {
        return {
            ...newState,
            getCapResp: '',
            typename: '',
            typenames: [],
            valueReferences: consts.valueReferences,
            xmlNamespaces: {},
            valueReference: '',
            descFeatTypeResp: '',
            getPropValResp: '',
            ...consts.clearGetPropValInputs
        };
    }
    if (state.request === requests[1] && state.typename) {
        return {
            ...newState,
            valueReference: '',
            valueReferences: consts.valueReferences,
            descFeatTypeResp: '',
            getPropValResp: '',
            ...consts.clearGetPropValInputs
        };
    }
    // typename exists but no valueReference
    if (
        state.request === requests[2] &&
        state.typename &&
        !state.valueReference
    ) {
        toast.info(toasts.noValueRef);
        return { ...newState, wfsRequest: '' };
    }
    // no typename & valueReference
    if (
        state.request === requests[2] &&
        state.typename === noOption &&
        !state.valueReference
    ) {
        toast.info(toasts.noTypValueRef);
        return { ...newState, wfsRequest: '' };
    }
    if (
        state.request === requests[2] &&
        state.typename !== noOption &&
        state.valueReference
    ) {
        const valRefType = getValRefType({
            typename: state.typename,
            valueReference: state.valueReference,
            valueReferences: state.valueReferences
        });
        const selectedTypValueRef = `typeName: ${state.typename} \nvalueReference: ${state.valueReference}`;
        return {
            ...newState,
            ...consts.clearGetPropValInputs,
            selectedTypValueRef,
            getPropValResp: '',
            compOper: compOperList[0],
            showNonNumericValue:
                (valRefType && nonNumericTypes.includes(valRefType)) || false,
            showNumericValue:
                (valRefType && numericTypes.includes(valRefType)) || false
        };
    }
    return newState;
}
