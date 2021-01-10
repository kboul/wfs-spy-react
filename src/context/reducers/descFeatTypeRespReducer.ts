import { State, Action } from '../models';
import { extractAttrNamesTypes } from '../../wfsMetadata';

export default function descFeatTypeRespReducer(
    state: State,
    action: Action
): State {
    const {
        descFeatTypeResp,
        getDescFeatTypeTime,
        postDescFeatTypeTime
    } = action.payload;

    const getDescFeatTypeNumber = getDescFeatTypeTime
        ? ++state.getDescFeatTypeNumber
        : state.getDescFeatTypeNumber;

    const postDescFeatTypeNumber = postDescFeatTypeTime
        ? ++state.postDescFeatTypeNumber
        : state.postDescFeatTypeNumber;

    return {
        ...state,
        descFeatTypeResp,
        valueReferences: extractAttrNamesTypes(descFeatTypeResp),
        getDescFeatTypeTime: getDescFeatTypeTime || state.getDescFeatTypeTime,
        postDescFeatTypeTime:
            postDescFeatTypeTime || state.postDescFeatTypeTime,
        getDescFeatTypeNumber,
        postDescFeatTypeNumber
    };
}
