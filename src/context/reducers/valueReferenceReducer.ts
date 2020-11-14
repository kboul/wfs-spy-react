import { State, Action } from '../models';
import consts from '../constants';

export default (state: State, action: Action): State => {
    return {
        ...state,
        valueReference: action.payload.valueReference,
        ...consts.revertGetPropValInputs
    };
};
