import chartOptions from ".";
import consts from "../../constants";

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
