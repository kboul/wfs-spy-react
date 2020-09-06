import types from './actionTypes';
import { Action } from './models';

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
    resetState
};
