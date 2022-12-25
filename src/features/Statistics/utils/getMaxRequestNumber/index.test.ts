import getMaxRequestNumber from ".";
import initialState from "../../../../context/initialState";

test("returns max request number between get & post requests", () => {
  const output = getMaxRequestNumber({
    ...initialState,
    getGetCapNumber: 2,
    getDescFeatTypeNumber: 3,
    getGetPropValNumber: 1,
    getGetPropValFiltNumber: 0,
    postGetCapNumber: 1
  });
  expect(output).toBe(6);
});
