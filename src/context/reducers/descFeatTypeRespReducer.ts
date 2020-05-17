import { IState, IAction } from '../models';

const descFeatTypeRespReducer = (state: IState, action: IAction) => {
    return {
        ...state,
        descFeatTypeResp: action.payload.descFeatTypeResp,
        getDescFeatTypeTime: action.payload.getDescFeatTypeTime,
        getDescFeatTypeNumber: ++state.getDescFeatTypeNumber
    };
};

export default descFeatTypeRespReducer;
