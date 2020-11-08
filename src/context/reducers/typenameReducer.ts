import { State, Action } from '../models';
import { noOption } from '../../shared/constants';

const typenameReducer = (state: State, action: Action): State => {
    const { typename } = action.payload;

    if (typename === noOption)
        return { ...state, typename, valueReference: '' };
    if (state.descFeatTypeResp) {
        if (
            state.typename &&
            state.typename !== noOption &&
            Object.keys(state.valueReferences?.names).length === 1
        )
            return {
                ...state,
                typename,
                valueReference: ''
            };
    }
    return { ...state, typename };
};

export default typenameReducer;
