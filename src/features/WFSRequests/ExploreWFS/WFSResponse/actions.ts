import { Dispatch } from 'react';

import { changeState, types } from '../../../../context';
import { Action } from '../../../../context/models';
import { extractTypenames } from '../../../../wfsMetadata';
import { isMethodGet } from '../../utils';

const changeGetCapResp = (
    dispatch: Dispatch<Action>,
    data: string,
    time: number,
    httpMethod: string
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
    dispatch: Dispatch<Action>,
    data: string,
    time: number,
    httpMethod: string
) => {
    const getOrPost = isMethodGet(httpMethod) ? 'get' : 'post';
    const payload = {
        descFeatTypeResp: data,
        [`${getOrPost}DescFeatTypeTime`]: time
    };
    dispatch(changeState(types.descFeatTypeRespChanged, payload));
};

const changeGetPropValResp = (
    dispatch: Dispatch<Action>,
    data: string,
    time: number
) => {
    dispatch(
        changeState(types.getPropValRespChanged, {
            getPropValResp: data,
            getGetPropValTime: time
        })
    );
};

export { changeGetCapResp, changeDescFeatTypeResp, changeGetPropValResp };
