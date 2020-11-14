import { State, Action } from '../models';
import { extractAttrValuesData, parseXML } from '../../shared/wfsMetadata';

const getPropValRespReducer = (state: State, action: Action): State => {
    const { getPropValResp, getGetPropValTime } = action.payload;
    const parsedResponse = parseXML(getPropValResp);
    const {
        valueCount,
        minValue,
        maxValue,
        attrValues
    } = extractAttrValuesData(parsedResponse);
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
