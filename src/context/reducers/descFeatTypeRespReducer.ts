import { State, Action } from '../models';
import { parseXML, extractAttrNamesTypes } from '../../wfsMetadata';

const descFeatTypeRespReducer = (state: State, action: Action): State => {
    const descFeatTypeResp = parseXML(action.payload.descFeatTypeResp);
    return {
        ...state,
        descFeatTypeResp: action.payload.descFeatTypeResp,
        getDescFeatTypeTime: action.payload.getDescFeatTypeTime,
        getDescFeatTypeNumber: ++state.getDescFeatTypeNumber,
        valueReferences: extractAttrNamesTypes(descFeatTypeResp)
    };
};

export default descFeatTypeRespReducer;
