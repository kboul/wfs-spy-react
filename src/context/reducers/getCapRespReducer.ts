import { State, Action } from '../models';
import { noOption } from '../../config/constants';

const getCapRespReducer = (state: State, action: Action): State => {
    const { getCapResp, typenames, getGetCapTime } = action.payload;
    return {
        ...state,
        getCapResp,
        typenames,
        getGetCapTime,
        getGetCapNumber: ++state.getGetCapNumber,
        typename: noOption
    };
};

export default getCapRespReducer;
