import disableRespBtns from "./utils";
import initialState from "../../../context/initialState";

describe("disableRespBtns", () => {
  describe("label includes Response", () => {
    test("should return the correct object values", () => {
      const buttonsState = {
        postRequestClicked: true,
        getRequestClicked: false
      };
      const state = {
        ...initialState,
        ...buttonsState
      };

      const output = disableRespBtns(state, "Response");
      expect(output).toEqual({
        disableGetRespBtn: buttonsState.postRequestClicked,
        disablePostRespBtn: buttonsState.getRequestClicked
      });
    });
  });

  describe("label includes Filter Response", () => {
    test("should return the correct object values", () => {
      const buttonsState = {
        postFilterRequestClicked: true,
        getFilterRequestClicked: false
      };
      const state = {
        ...initialState,
        ...buttonsState
      };

      const output = disableRespBtns(state, "Filter Response");
      expect(output).toEqual({
        disableGetRespBtn: buttonsState.postFilterRequestClicked,
        disablePostRespBtn: buttonsState.getFilterRequestClicked
      });
    });
  });
});
