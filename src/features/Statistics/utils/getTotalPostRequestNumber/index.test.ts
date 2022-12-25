import getTotalPostRequestNumber from ".";
import initialState from "../../../../context/initialState";

test("returns total number of post requests", () => {
  const output = getTotalPostRequestNumber({
    ...initialState,
    postGetCapNumber: 1,
    postDescFeatTypeNumber: 2,
    postGetPropValNumber: 5,
    postGetPropValFiltNumber: 10
  });
  expect(output).toBe(18);
});
