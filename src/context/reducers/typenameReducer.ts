import { State, Action } from '../models';
import globalConsts from '../../constants';

export default function typenameReducer(state: State, action: Action): State {
    const { typename } = action.payload;
    const newState = { ...state, typename };

    const { noOption } = globalConsts;

    if (typename === noOption) return { ...newState, valueReference: '' };
    if (state.descFeatTypeResp) {
        if (
            state.typename &&
            state.typename !== noOption &&
            Object.keys(state.valueReferences?.names).length === 1
        )
            return { ...newState, valueReference: '' };
    }
    return newState;
}
