import { State, Action } from '../models';
import { extractAttrValues } from '../../wfsMetadata';

export default function getPropValRespReducer(
    state: State,
    action: Action
): State {
    const { getPropValResp, getGetPropValTime } = action.payload;
    const { valueCount, minValue, maxValue, attrValues } = extractAttrValues(
        getPropValResp
    );
    return {
        ...state,
        getPropValResp,
        getGetPropValTime,
        getGetPropValNumber: ++state.getGetPropValNumber,
        valueCount,
        minValue,
        maxValue,
        attrValues
    };
}
