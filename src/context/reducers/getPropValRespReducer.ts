import { State, Action } from '../models';
import { parseXML, extractAttrValues } from '../../wfsMetadata';

const getPropValRespReducer = (state: State, action: Action): State => {
    const { getPropValResp, getGetPropValTime } = action.payload;
    const parsedResponse = parseXML(getPropValResp);
    const { valueCount, minValue, maxValue, attrValues } = extractAttrValues(
        parsedResponse
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
};

export default getPropValRespReducer;
