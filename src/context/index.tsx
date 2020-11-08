import React, {
    createContext,
    Dispatch,
    useContext,
    useReducer,
    ReactNode
} from 'react';

import { State, Action } from './models';
import initialState from './initialState';
import {
    descFeatTypeRespReducer,
    getCapRespReducer,
    getPropValRespReducer,
    requestReducer,
    typenameReducer,
    wfsRequestReducer
} from './reducers';

// Actions
const types = {
    urlChanged: 'urlChanged',
    versionChanged: 'versionChanged',
    requestChanged: 'requestChanged',
    typenameChanged: 'typenameChanged',
    valueReferenceChanged: 'valueReferenceChanged',
    wfsRequestChanged: 'wfsRequestChanged',
    wfsResponseChanged: 'wfsResponseChanged',
    getCapRespChanged: 'getCapRespChanged',
    descFeatTypeRespChanged: 'descFeatTypeRespChanged',
    getPropValRespChanged: 'getPropValRespChanged',
    compOperChanged: 'compOperChanged',
    lowerValueChanged: 'lowerValueChanged',
    upperValueChanged: 'upperValueChanged',
    addSortByChanged: 'addSortByChanged',
    numericValueChanged: 'numericValueChanged',
    nonNumericValueChanged: 'nonNumericValueChanged',
    stateReset: 'stateReset'
};

// Action creators
const changeUrl = (payload: { url: string }): Action => ({
    type: types.urlChanged,
    payload
});

const changeVersion = (payload: { version: string }): Action => ({
    type: types.versionChanged,
    payload
});

const changeRequest = (payload: { request: string }): Action => ({
    type: types.requestChanged,
    payload
});

const changeTypename = (payload: { typename: string }): Action => ({
    type: types.typenameChanged,
    payload
});

const changeValueReference = (payload: { valueReference: string }): Action => ({
    type: types.valueReferenceChanged,
    payload
});

const changeWfsRequest = (payload: { wfsRequest: string }): Action => ({
    type: types.wfsRequestChanged,
    payload
});

const changeWfsResponse = (payload: { wfsResponse: string }): Action => ({
    type: types.wfsResponseChanged,
    payload
});

const changeGetCapResp = (payload: {
    getCapResp: string;
    typenames: string[];
    getGetCapTime: number;
}): Action => ({
    type: types.getCapRespChanged,
    payload
});

const changeDescFeatTypeResp = (payload: {
    descFeatTypeResp: string;
    getDescFeatTypeTime: number;
}): Action => ({
    type: types.descFeatTypeRespChanged,
    payload
});

const changeGetPropValResp = (payload: {
    getPropValResp: string;
    getGetPropValTime: number;
}): Action => ({
    type: types.getPropValRespChanged,
    payload
});

const changeCompOper = (payload: { compOper: string }): Action => ({
    type: types.compOperChanged,
    payload
});

const changeLowerValue = (payload: { lowerValue: string }): Action => ({
    type: types.lowerValueChanged,
    payload
});

const changeUpperValue = (payload: { upperValue: string }): Action => ({
    type: types.upperValueChanged,
    payload
});

const changeAddSortBy = (payload: { addSortBy: string }): Action => ({
    type: types.addSortByChanged,
    payload
});

const changeNumericValue = (payload: { numericValue: string }): Action => ({
    type: types.numericValueChanged,
    payload
});

const changeNonNumericValue = (payload: {
    nonNumericValue: string;
}): Action => ({
    type: types.nonNumericValueChanged,
    payload
});

const resetState = (): Action => ({ type: types.stateReset, payload: {} });

export {
    changeUrl,
    changeVersion,
    changeRequest,
    changeTypename,
    changeValueReference,
    changeWfsRequest,
    changeWfsResponse,
    changeGetCapResp,
    changeDescFeatTypeResp,
    changeGetPropValResp,
    changeCompOper,
    changeLowerValue,
    changeUpperValue,
    changeAddSortBy,
    changeNumericValue,
    changeNonNumericValue,
    resetState
};

// Reducer
const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case types.urlChanged:
            return { ...state, url: action.payload.url };
        case types.versionChanged:
            return { ...state, version: action.payload.version };
        case types.requestChanged:
            return requestReducer(state, action);
        case types.typenameChanged:
            return typenameReducer(state, action);
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
        case types.getPropValRespChanged:
            return getPropValRespReducer(state, action);
        case types.compOperChanged:
            return { ...state, compOper: action.payload.compOper };
        case types.lowerValueChanged:
            return { ...state, lowerValue: action.payload.lowerValue };
        case types.upperValueChanged:
            return { ...state, upperValue: action.payload.upperValue };
        case types.addSortByChanged:
            return { ...state, addSortBy: action.payload.addSortBy };
        case types.numericValueChanged:
            return { ...state, numericValue: action.payload.numericValue };
        case types.nonNumericValueChanged:
            return {
                ...state,
                nonNumericValue: action.payload.nonNumericValue
            };
        case types.stateReset:
            return initialState;
        default:
            return state;
    }
};

// Context
interface ContextProps {
    state: State;
    dispatch: Dispatch<Action>;
}

const Context = createContext<State | any>(initialState);

// Provider
interface ProviderProps {
    children: ReactNode;
}

function Provider({ children }: ProviderProps) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    );
}

// useAppContent hook
function useAppContext() {
    return useContext<ContextProps>(Context);
}

export { Provider, useAppContext };
