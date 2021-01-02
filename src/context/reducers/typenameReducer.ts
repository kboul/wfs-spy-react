import { State, Action } from '../models';
import { noOption } from '../../config/constants';

const typenameReducer = (state: State, action: Action): State => {
    const { typename } = action.payload;
    const newState = { ...state, typename };

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
};

export default typenameReducer;
