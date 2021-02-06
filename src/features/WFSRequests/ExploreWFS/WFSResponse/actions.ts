import { Dispatch } from 'react';

import { changeState, types } from '../../../../context';
import { Action } from '../../../../context/models';
import { extractTypenames } from '../../../../wfsMetadata';
import { getOrPost } from '../../utils';

const changeGetCapResp = (
    httpMethod: string,
    dispatch: Dispatch<Action>,
    data: string,
    time: number
) => {
    const payload = {
        getCapResp: data,
        typenames: extractTypenames(data),
        [`${getOrPost(httpMethod)}GetCapTime`]: time
    };
    dispatch(changeState(types.getCapRespChanged, payload));
};

const changeDescFeatTypeResp = (
    httpMethod: string,
    dispatch: Dispatch<Action>,
    data: string,
    time: number
) => {
    const payload = {
        descFeatTypeResp: data,
        [`${getOrPost(httpMethod)}DescFeatTypeTime`]: time
    };
    dispatch(changeState(types.descFeatTypeRespChanged, payload));
};

const changeGetPropValResp = (
    httpMethod: string,
    dispatch: Dispatch<Action>,
    data: string,
    time: number
) => {
    const payload = {
        getPropValResp: data,
        [`${getOrPost(httpMethod)}GetPropValTime`]: time
    };
    dispatch(changeState(types.getPropValRespChanged, payload));
};

export { changeGetCapResp, changeDescFeatTypeResp, changeGetPropValResp };
