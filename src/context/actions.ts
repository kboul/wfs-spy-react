import types from './actionTypes';
import { IAction } from './models';

const changeUrl = (payload: { url: string }): IAction => ({
    type: types.urlChanged,
    payload
});

const changeVersion = (payload: { version: string }): IAction => ({
    type: types.versionChanged,
    payload
});

const changeRequest = (payload: { request: string }): IAction => ({
    type: types.requestChanged,
    payload
});

const changeTypename = (payload: { typename: string }): IAction => ({
    type: types.typenameChanged,
    payload
});

const changeValueReference = (payload?: {
    valueReference: string;
}): IAction => ({
    type: types.valueReferenceChanged,
    payload
});

const changeWfsRequest = (payload: { wfsRequest: string }): IAction => ({
    type: types.wfsRequestChanged,
    payload
});

const changeWfsResponse = (payload: { wfsResponse: string }): IAction => ({
    type: types.wfsResponseChanged,
    payload
});

const changeGetCapResp = (payload: {
    getCapResp: string;
    typenames: string[];
    getGetCapTime: number;
}): IAction => ({
    type: types.getCapRespChanged,
    payload
});

const changeDescFeatTypeResp = (payload: {
    descFeatTypeResp: string;
    getDescFeatTypeTime: number;
}): IAction => ({
    type: types.descFeatTypeRespChanged,
    payload
});

const resetState = (): IAction => ({ type: types.stateReset, payload: {} });

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
    resetState
};
