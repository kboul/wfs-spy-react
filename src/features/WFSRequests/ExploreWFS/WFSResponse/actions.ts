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
    const payload = {
        getCapResp: data,
        typenames: extractTypenames(data),
        [isMethodGet(httpMethod) ? 'getGetCapTime' : 'postGetCapTime']: time
    };
    dispatch(changeState(types.getCapRespChanged, payload));
};

const changeDescFeatTypeResp = (
    dispatch: Dispatch<Action>,
    data: string,
    time: number
) => {
    dispatch(
        changeState(types.descFeatTypeRespChanged, {
            descFeatTypeResp: data,
            getDescFeatTypeTime: time
        })
    );
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
