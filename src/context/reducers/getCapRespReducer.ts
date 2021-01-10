import { State, Action } from '../models';
import { noOption } from '../../config/constants';

export default function getCapRespReducer(state: State, action: Action): State {
    const {
        getCapResp,
        typenames,
        getGetCapTime,
        postGetCapTime
    } = action.payload;

    const getGetCapNumber = getGetCapTime
        ? ++state.getGetCapNumber
        : state.getGetCapNumber;

    const postGetCapNumber = postGetCapTime
        ? ++state.postGetCapNumber
        : state.postGetCapNumber;

    return {
        ...state,
        getCapResp,
        typenames,
        typename: noOption,
        getGetCapTime: getGetCapTime || state.getGetCapTime,
        postGetCapTime: postGetCapTime || state.postGetCapTime,
        getGetCapNumber,
        postGetCapNumber
    };
}
