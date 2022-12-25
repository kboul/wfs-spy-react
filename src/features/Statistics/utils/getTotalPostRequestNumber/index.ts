import { State } from "../../../../context/models";

export default function getTotalPostRequestNumber(state: State): number {
  return (
    state.postGetCapNumber +
    state.postDescFeatTypeNumber +
    state.postGetPropValNumber +
    state.postGetPropValFiltNumber
  );
}
