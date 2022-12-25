import getAttrNameTypeList from ".";
import valueReferences from "../../../../../tests/data/valueReferences";

test("returns a list of attribute names and types", () => {
  const output = getAttrNameTypeList("mais:ATCCS_ESMM", valueReferences);
  expect(output.length).toBeGreaterThan(0);
});
