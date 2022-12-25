import { State, Action } from "../models";
import { extractFiltAttrValues } from "../../wfsMetadata";

export default function getPropValFiltRespReducer(
  state: State,
  action: Action
): State {
  const { getPropValFiltResp, getGetPropValFiltTime, postGetPropValFiltTime } =
    action.payload;

  const getGetPropValFiltNumber = getGetPropValFiltTime
    ? ++state.getGetPropValFiltNumber
    : state.getGetPropValFiltNumber;

  const postGetPropValFiltNumber = postGetPropValFiltTime
    ? ++state.postGetPropValFiltNumber
    : state.postGetPropValFiltNumber;

  return {
    ...state,
    getPropValFiltResp,
    getGetPropValFiltTime: getGetPropValFiltTime || state.getGetPropValFiltTime,
    postGetPropValFiltTime:
      postGetPropValFiltTime || state.postGetPropValFiltTime,
    getGetPropValFiltNumber,
    postGetPropValFiltNumber,
    filterValueCount: extractFiltAttrValues(getPropValFiltResp)
  };
}
