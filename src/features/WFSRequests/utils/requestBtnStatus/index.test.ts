import requestBtnStatus from ".";

describe("requestBtnStatus", () => {
  describe("request argument is defined", () => {
    test("http method is GET", () => {
      const output = requestBtnStatus("GET", "normal");
      expect(output).toEqual({
        getFilterRequestClicked: true,
        postFilterRequestClicked: false
      });
    });

    test("http method is POST", () => {
      const output = requestBtnStatus("POST", "normal");
      expect(output).toEqual({
        getFilterRequestClicked: false,
        postFilterRequestClicked: true
      });
    });
  });

  describe("request argument is not defined", () => {
    test("http method is GET", () => {
      const output = requestBtnStatus("GET");
      expect(output).toEqual({
        getRequestClicked: true,
        postRequestClicked: false
      });
    });

    test("http method is POST", () => {
      const output = requestBtnStatus("POST");
      expect(output).toEqual({
        getRequestClicked: false,
        postRequestClicked: true
      });
    });
  });
});
