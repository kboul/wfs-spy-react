import { State, Action } from "../models";
import { extractAttrNamesTypes } from "../../wfsMetadata";
import { firstValueReference } from "../../utils";

export default function descFeatTypeRespReducer(
  state: State,
  action: Action
): State {
  const { descFeatTypeResp, getDescFeatTypeTime, postDescFeatTypeTime } =
    action.payload;

  const getDescFeatTypeNumber = getDescFeatTypeTime
    ? ++state.getDescFeatTypeNumber
    : state.getDescFeatTypeNumber;

  const postDescFeatTypeNumber = postDescFeatTypeTime
    ? ++state.postDescFeatTypeNumber
    : state.postDescFeatTypeNumber;

  const valueReferences = extractAttrNamesTypes(descFeatTypeResp);
  const valueReference = firstValueReference(state.typename, valueReferences);

  return {
    ...state,
    descFeatTypeResp,
    valueReferences,
    valueReference: valueReference || state.valueReference,
    getDescFeatTypeTime: getDescFeatTypeTime || state.getDescFeatTypeTime,
    postDescFeatTypeTime: postDescFeatTypeTime || state.postDescFeatTypeTime,
    getDescFeatTypeNumber,
    postDescFeatTypeNumber
  };
}
