import { State, Action } from '../models';
import { extractAttrNamesTypes } from '../../wfsMetadata';

export default function descFeatTypeRespReducer(
    state: State,
    action: Action
): State {
    const { descFeatTypeResp, getDescFeatTypeTime } = action.payload;
    return {
        ...state,
        descFeatTypeResp,
        getDescFeatTypeTime,
        getDescFeatTypeNumber: ++state.getDescFeatTypeNumber,
        valueReferences: extractAttrNamesTypes(descFeatTypeResp)
    };
}
