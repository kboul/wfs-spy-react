import {
    createContext,
    Dispatch,
    useContext,
    useReducer,
    useMemo,
    ReactNode
} from 'react';

import { State, Action } from './models';
import initialState from './initialState';
import {
    descFeatTypeRespReducer,
    getCapRespReducer,
    getPropValRespReducer,
    getPropValFiltRespReducer,
    requestReducer,
    typenameReducer,
    wfsRequestReducer,
    wfsFilterRequestReducer
} from './reducers';

// Actions
export const types = {
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
    getPropValFiltRespChanged: 'getPropValFiltRespChanged',
    compOperChanged: 'compOperChanged',
    lowerValueChanged: 'lowerValueChanged',
    upperValueChanged: 'upperValueChanged',
    lowerUpperValuesReset: 'lowerUpperValuesReset',
    addSortByChanged: 'addSortByChanged',
    numericValueChanged: 'numericValueChanged',
    nonNumericValueChanged: 'nonNumericValueChanged',
    numericNonNumericValuesReset: 'numericNonNumericValuesReset',
    wfsFilterRequestChanged: 'wfsFilterRequestChanged',
    wfsFilterResponseChanged: 'wfsFilterResponseChanged',
    modalToggled: 'modalToggled',
    stateReset: 'stateReset'
};

// Reusable Action Creator
const changeState = (type: string, payload: Object): Action => ({
    type,
    payload
});

export { changeState };

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
        case types.getPropValFiltRespChanged:
            return getPropValFiltRespReducer(state, action);
        case types.compOperChanged:
            return { ...state, compOper: action.payload.compOper };
        case types.lowerValueChanged:
            return { ...state, lowerValue: action.payload.lowerValue };
        case types.upperValueChanged:
            return { ...state, upperValue: action.payload.upperValue };
        case types.lowerUpperValuesReset:
            return { ...state, lowerValue: '', upperValue: '' };
        case types.addSortByChanged:
            return { ...state, addSortBy: action.payload.addSortBy };
        case types.numericValueChanged:
            return { ...state, numericValue: action.payload.numericValue };
        case types.nonNumericValueChanged:
            return {
                ...state,
                nonNumericValue: action.payload.nonNumericValue
            };
        case types.numericNonNumericValuesReset:
            return { ...state, numericValue: '', nonNumericValue: [] };
        case types.wfsFilterRequestChanged:
            return wfsFilterRequestReducer(state, action);
        case types.wfsFilterResponseChanged:
            return {
                ...state,
                wfsFilterResponse: action.payload.wfsFilterResponse
            };
        case types.modalToggled:
            return {
                ...state,
                isModalOpen: !state.isModalOpen,
                modalOperation: action.payload.modalOperation
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

    const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

    return <Context.Provider value={value}>{children}</Context.Provider>;
}

// useAppContent hook
function useAppContext() {
    return useContext<ContextProps>(Context);
}

export { Provider, useAppContext };
