import getValRefType from ".";
import valueReferences from "../../tests/data/valueReferences";
import consts from "../../context/constants";

describe("getValRefType", () => {
  describe("all arguments are defined", () => {
    const args = {
      typename: "mais:ATCCS_ESMM",
      valueReference: "",
      valueReferences
    };

    test("returns the correct valueReference type when attribute has string type", () => {
      args.valueReference = "TYPEOFAREA";
      const output = getValRefType(args);
      expect(output).toBe("string");
    });

    test("returns the correct valueReference type when attribute has decimal type", () => {
      args.valueReference = "MSID";
      const output = getValRefType(args);
      expect(output).toEqual("decimal");
    });

    test("returns the correct valueReference type when attribute has geometry type", () => {
      args.valueReference = "GEOMETRY";
      const output = getValRefType(args);
      expect(output).toEqual("gml:SurfacePropertyType");
    });
  });

  describe("an argument is not defined", () => {
    test("returns an empty string when typename is not defined or is an empty string", () => {
      const args = {
        typename: "",
        valueReference: "GEOMETRY",
        valueReferences
      };
      const output = getValRefType(args);
      expect(output).toEqual("");
    });

    test("returns an empty string when typename is not defined or is an empty string", () => {
      const args = {
        typename: "TYPEOFAREA",
        valueReference: "",
        valueReferences
      };
      const output = getValRefType(args);
      expect(output).toEqual("");
    });

    test('returns an empty string when valueReferences" names list is empty', () => {
      const args = {
        typename: "TYPEOFAREA",
        valueReference: "GEOMETRY",
        valueReferences: consts.valueReferences
      };
      const output = getValRefType(args);
      expect(output).toEqual("");
    });
  });
});
