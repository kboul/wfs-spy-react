import { IState, IAction } from '../models';

const getCapRespReducer = (state: IState, action: IAction) => {
    return {
        ...state,
        getCapResp: action.payload.getCapResp,
        typenames: action.payload.typenames,
        getGetCapTime: action.payload.getGetCapTime,
        getGetCapNumber: ++state.getGetCapNumber
    };
};

export default getCapRespReducer;
