import { State } from "../../../../context/models";
import { isPropBetween } from "../../../../utils";

export function validateFiltReqBtn(state: State): boolean | undefined {
  if (!state.getPropValResp) return true;
  if (isPropBetween(state.compOper))
    return Boolean(!state.lowerValue) || Boolean(!state.upperValue);
  if (state.showNonNumericValue) return state.nonNumericValue.length === 0;
  if (state.showNumericValue) return Boolean(!state.numericValue);
  return false;
}
