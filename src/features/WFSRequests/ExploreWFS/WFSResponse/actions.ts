import { Dispatch } from 'react';

import { changeState, types } from '../../../../context';
import { Action } from '../../../../context/models';
import { extractTypenames } from '../../../../wfsMetadata';

const changeGetCapResp = (
    dispatch: Dispatch<Action>,
    data: string,
    time: number
) => {
    dispatch(
        changeState(types.getCapRespChanged, {
            getCapResp: data,
            typenames: extractTypenames(data),
            getGetCapTime: time
        })
    );
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
