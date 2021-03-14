import { State } from '../../../../../context/models';

export default function disableRespBtns(state: State, label: string) {
    const labelHasResponse = label.includes('Response');
    const labelHasFilterResponse = label.includes('Filter Response');

    let disableGetRespBtn;
    let disablePostRespBtn;

    if (labelHasResponse) {
        disableGetRespBtn = state.postRequestClicked;
        disablePostRespBtn = state.getRequestClicked;
    }

    if (labelHasFilterResponse) {
        disableGetRespBtn = state.postFilterRequestClicked;
        disablePostRespBtn = state.getFilterRequestClicked;
    }

    return {
        disableGetRespBtn,
        disablePostRespBtn
    };
}
