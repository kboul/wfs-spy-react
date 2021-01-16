import { Dispatch } from 'react';

import { changeState, types } from '../../../../context';
import { Action } from '../../../../context/models';
import { extractTypenames } from '../../../../wfsMetadata';
import { isMethodGet } from '../../utils';

const changeGetCapResp = (
    httpMethod: string,
    dispatch: Dispatch<Action>,
    data: string,
    time: number
) => {
    const getOrPost = isMethodGet(httpMethod) ? 'get' : 'post';
    const payload = {
        getCapResp: data,
        typenames: extractTypenames(data),
        [`${getOrPost}GetCapTime`]: time
    };
    dispatch(changeState(types.getCapRespChanged, payload));
};

const changeDescFeatTypeResp = (
    httpMethod: string,
    dispatch: Dispatch<Action>,
    data: string,
    time: number
) => {
    const getOrPost = isMethodGet(httpMethod) ? 'get' : 'post';
    const payload = {
        descFeatTypeResp: data,
        [`${getOrPost}DescFeatTypeTime`]: time
    };
    dispatch(changeState(types.descFeatTypeRespChanged, payload));
};

const changeGetPropValResp = (
    httpMethod: string,
    dispatch: Dispatch<Action>,
    data: string,
    time: number
) => {
    console.log(time);
    const getOrPost = isMethodGet(httpMethod) ? 'get' : 'post';
    const payload = {
        getPropValResp: data,
        [`${getOrPost}GetPropValTime`]: time
    };
    dispatch(changeState(types.getPropValRespChanged, payload));
};

export { changeGetCapResp, changeDescFeatTypeResp, changeGetPropValResp };
