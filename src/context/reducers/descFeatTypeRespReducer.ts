import { IState, IAction } from '../models';
import { extractAttrNamesTypes, parseXML } from '../../shared/wfsMetadata';

const descFeatTypeRespReducer = (state: IState, action: IAction) => {
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
