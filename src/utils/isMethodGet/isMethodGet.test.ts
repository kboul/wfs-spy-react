import isMethodGet from "./isMethodGet";

describe("isMethodGet", () => {
  test("returns truthy when input is GET ", () => {
    const flag = isMethodGet("GET");
    expect(flag).toBeTruthy();
  });

  test("returns truthy when input is not GET ", () => {
    const flag = isMethodGet("POST");
    expect(flag).toBeFalsy();
  });
});
