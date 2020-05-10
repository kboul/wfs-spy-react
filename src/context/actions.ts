import types from './types';

const setUrl = (payload: string) => ({ type: types.SET_URL, payload });

const setVersion = (payload: string) => ({ type: types.SET_VERSION, payload });

const setRequest = (payload: string) => ({ type: types.SET_REQUEST, payload });

const setTypename = (payload: string) => ({
    type: types.SET_TYPENAME,
    payload
});

const setWfsRequest = (payload: string) => ({
    type: types.SET_WFS_REQUEST,
    payload
});

const setWfsResponse = (payload: string) => ({
    type: types.SET_WFS_RESPONSE,
    payload
});

const setGetCapResp = (payload: {
    getCapResponse: string;
    typenames: string[];
    getGetCapTime: number;
}) => ({
    type: types.SET_GET_CAP_RESPONSE,
    payload
});

const setDescFeatTypeResp = (payload: {
    descFeatTypeResp: string;
    getDescFeatTypeTime: number;
}) => ({
    type: types.SET_DESC_FEAT_TYPE_RESP,
    payload
});

const reset = () => ({ type: types.RESET });

export {
    setUrl,
    setVersion,
    setRequest,
    setTypename,
    setWfsRequest,
    setWfsResponse,
    setGetCapResp,
    setDescFeatTypeResp,
    reset
};
