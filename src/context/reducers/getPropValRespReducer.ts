import { IState, IAction } from '../models';
import { extractAttrValuesData, parseXML } from '../../shared/wfsMetadata';

const getPropValRespReducer = (state: IState, action: IAction): IState => {
    const { getPropValResp, getGetPropValTime } = action.payload;
    const parsedResponse = parseXML(getPropValResp);
    const { valueCount, minValue, maxValue } = extractAttrValuesData(
        parsedResponse
    );
    return {
        ...state,
        getPropValResp,
        getGetPropValTime,
        getGetPropValNumber: ++state.getGetPropValNumber,
        valueCount,
        minValue,
        maxValue
    };
};

export default getPropValRespReducer;
