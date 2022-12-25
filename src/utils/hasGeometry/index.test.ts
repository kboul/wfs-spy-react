import hasGeometry from ".";

describe("hasGeometry", () => {
  test("returns falsy when value reference type is not of geometry type", () => {
    expect(hasGeometry("xsd:string")).toBeFalsy();
  });

  test("returns truthy when value reference type contains either gml or the_geom", () => {
    expect(hasGeometry("gml:CurvePropertyType")).toBeTruthy();
    expect(hasGeometry("the_geom:SurfacePropertyType")).toBeTruthy();
  });
});
