import isPropBetween from "./isPropBetween";

describe("isPropBetween", () => {
  test("returns truthy when comparison operator is PropertyIsBetween", () => {
    const flag = isPropBetween("PropertyIsBetween");
    expect(flag).toBeTruthy();
  });

  test("returns truthy when comparison operator is not PropertyIsBetween", () => {
    const flag = isPropBetween("PropertyIsEqual");
    expect(flag).toBeFalsy();
  });
});
