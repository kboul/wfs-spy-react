import types from './types';
import { IAction } from './models';

const setUrl = (payload: string): IAction => ({ type: types.SET_URL, payload });

const setVersion = (payload: string): IAction => ({
    type: types.SET_VERSION,
    payload
});

const setRequest = (payload: string): IAction => ({
    type: types.SET_REQUEST,
    payload
});

const setTypename = (payload: string): IAction => ({
    type: types.SET_TYPENAME,
    payload
});

const setValueReference = (payload?: string): IAction => ({
    type: types.SET_VALUE_REFERENCE,
    payload
});

const setWfsRequest = (payload: string): IAction => ({
    type: types.SET_WFS_REQUEST,
    payload
});

const setWfsResponse = (payload: string): IAction => ({
    type: types.SET_WFS_RESPONSE,
    payload
});

const setGetCapResp = (payload: {
    getCapResp: string;
    typenames: string[];
    getGetCapTime: number;
}): IAction => ({
    type: types.SET_GET_CAP_RESPONSE,
    payload
});

const setDescFeatTypeResp = (payload: {
    descFeatTypeResp: string;
    getDescFeatTypeTime: number;
}): IAction => ({
    type: types.SET_DESC_FEAT_TYPE_RESP,
    payload
});

const reset = (): IAction => ({ type: types.RESET, payload: {} });

export {
    setUrl,
    setVersion,
    setRequest,
    setTypename,
    setValueReference,
    setWfsRequest,
    setWfsResponse,
    setGetCapResp,
    setDescFeatTypeResp,
    reset
};
