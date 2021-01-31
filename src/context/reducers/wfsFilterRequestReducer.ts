import { State, Action } from '../models';

export default function wfsFilterRequestReducer(
    state: State,
    action: Action
): State {
    const {
        getFilterRequestClicked,
        postFilterRequestClicked,
        wfsFilterRequest
    } = action.payload;
    return {
        ...state,
        wfsFilterRequest,
        filterValueCount: '',
        wfsFilterResponse: '',
        getFilterRequestClicked,
        postFilterRequestClicked
    };
}
