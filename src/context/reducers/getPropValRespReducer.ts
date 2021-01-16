import { State, Action } from '../models';
import { extractAttrValues } from '../../wfsMetadata';

export default function getPropValRespReducer(
    state: State,
    action: Action
): State {
    const {
        getPropValResp,
        getGetPropValTime,
        postGetPropValTime
    } = action.payload;

    const getGetPropValNumber = getGetPropValTime
        ? ++state.getGetPropValNumber
        : state.getGetPropValNumber;

    const postGetPropValNumber = postGetPropValTime
        ? ++state.postGetPropValNumber
        : state.postGetPropValNumber;

    const { valueCount, minValue, maxValue, attrValues } = extractAttrValues(
        getPropValResp
    );

    return {
        ...state,
        getPropValResp,
        getGetPropValTime: getGetPropValTime || state.getGetPropValTime,
        postGetPropValTime: postGetPropValTime || state.postGetPropValTime,
        getGetPropValNumber,
        postGetPropValNumber,
        valueCount,
        minValue,
        maxValue,
        attrValues
    };
}
