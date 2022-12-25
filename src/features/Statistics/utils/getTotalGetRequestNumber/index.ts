import { State } from "../../../../context/models";

export default function getTotalGetRequestNumber(state: State): number {
  return (
    state.getGetCapNumber +
    state.getDescFeatTypeNumber +
    state.getGetPropValNumber +
    state.getGetPropValFiltNumber
  );
}
