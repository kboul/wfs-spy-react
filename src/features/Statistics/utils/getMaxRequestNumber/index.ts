import getTotalGetRequestNumber from '../getTotalGetRequestNumber';
import getTotalPostRequestNumber from '../getTotalPostRequestNumber';
import { State } from '../../../../context/models';

export default function getMaxRequestNumber(state: State) {
    return Math.max(
        getTotalGetRequestNumber(state),
        getTotalPostRequestNumber(state)
    );
}
