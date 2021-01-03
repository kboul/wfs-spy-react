import { State, Action } from '../models';
import { extractFiltAttrValues } from '../../wfsMetadata';

export default function getPropValFiltRespReducer(
    state: State,
    action: Action
): State {
    const { getPropValFiltResp, getGetPropValFiltTime } = action.payload;
    return {
        ...state,
        getPropValFiltResp,
        getGetPropValFiltTime,
        getGetPropValFiltNumber: ++state.getGetPropValFiltNumber,
        filterValueCount: extractFiltAttrValues(getPropValFiltResp)
    };
}
