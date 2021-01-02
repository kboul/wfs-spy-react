import { State, Action } from '../models';
import { noOption } from '../../config/constants';

const getCapRespReducer = (state: State, action: Action): State => {
    return {
        ...state,
        getCapResp: action.payload.getCapResp,
        typenames: action.payload.typenames,
        getGetCapTime: action.payload.getGetCapTime,
        getGetCapNumber: ++state.getGetCapNumber,
        typename: noOption
    };
};

export default getCapRespReducer;
