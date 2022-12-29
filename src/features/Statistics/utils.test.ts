import {
  chartOptions,
  getMaxRequestNumber,
  getTotalGetRequestNumber,
  getTotalPostRequestNumber
} from "./utils";
import consts from "./constants";
import initialState from "../../context/initialState";

describe("chartOptions", () => {
  describe("chart argument is time", () => {
    const output = chartOptions("time");
    test("returned object should have 11 keys", () => {
      expect(Object.keys(output).length).toEqual(11);
    });

    test("allowDecimals property to be null", () => {
      expect(output.yAxis.allowDecimals).toBe(null);
    });

    test("returns the correct yaxis title", () => {
      expect(output.yAxis.title.text).toBe(
        "Response Time (approximately in ms)"
      );
    });

    test("has the correct tooltip value", () => {
      expect(output.tooltip.valueSuffix).toBe(" ms");
    });

    test("has the correct series data", () => {
      expect(output.series).toBe(consts.timeSeries);
    });

    test("returns y value when it is not zero", () => {
      const result = output.plotOptions.bar.dataLabels.formatter();
      expect(result).not.toBeNull();
    });
  });

  describe("chart argument is number", () => {
    const output = chartOptions("number");
    test("returned object should have 11 keys", () => {
      expect(Object.keys(output).length).toEqual(11);
    });

    test("allowDecimals property to be falsy", () => {
      expect(output.yAxis.allowDecimals).toBeFalsy();
    });

    test("returns the correct yaxis title", () => {
      expect(output.yAxis.title.text).toBe("HTTP Request Number");
    });

    test("has the correct tooltip value", () => {
      expect(output.tooltip.valueSuffix).toBe("");
    });

    test("has the correct series data", () => {
      expect(output.series).toBe(consts.numberSeries);
    });

    test("returns y value when it is not zero", () => {
      const result = output.plotOptions.bar.dataLabels.formatter();
      expect(result).not.toBeNull();
    });
  });
});

describe("getMaxRequestNumber", () => {
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
});

describe("getTotalGetRequestNumber", () => {
  test("returns total number of get requests", () => {
    const output = getTotalGetRequestNumber({
      ...initialState,
      getGetCapNumber: 2,
      getDescFeatTypeNumber: 3,
      getGetPropValNumber: 1,
      getGetPropValFiltNumber: 0
    });
    expect(output).toBe(6);
  });
});

describe("getTotalPostRequestNumber", () => {
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
});
