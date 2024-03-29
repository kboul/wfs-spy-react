import ChartOptions from "./models";
import consts from "./constants";
import { State } from "../../context/models";

function chartOptions(chart: string): ChartOptions {
  return {
    chart: {
      type: "bar"
    },
    title: {
      text: ""
    },
    subtitle: {
      text: ""
    },
    xAxis: {
      categories: ["GET", "POST"],
      title: {
        text: null
      },
      labels: {
        style: {
          font: "13px Arial, sans-serif",
          fontWeight: "bold"
        }
      }
    },
    yAxis: {
      allowDecimals: chart === "time" ? null : false,
      min: 0,
      max: null,
      title: {
        style: {
          font: "13px Arial, sans-serif",
          fontWeight: "bold"
        },
        text:
          chart === "time"
            ? "Response Time (approximately in ms)"
            : "HTTP Request Number",
        align: "high"
      },
      labels: {
        overflow: "justify"
      }
    },
    tooltip: {
      valueSuffix: chart === "time" ? " ms" : ""
    },
    colors: ["#2f7ed8", "#d8352f", "#2fd835", "#d82fd2", "#2fd2d8"],
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true,
          // Prevent zero values from being displayed
          formatter(this: any) {
            if (this.y !== 0) return this.y;
            return null;
          }
        }
      }
    },
    legend: {
      layout: "horizontal",
      align: "center",
      verticalAlign: "top",
      x: 0,
      y: -10,
      floating: true,
      borderWidth: 1,
      backgroundColor: "#FFFFFF",
      shadow: true
    },
    credits: {
      enabled: false
    },
    series: chart === "time" ? consts.timeSeries : consts.numberSeries
  };
}

function getMaxRequestNumber(state: State) {
  return Math.max(
    getTotalGetRequestNumber(state),
    getTotalPostRequestNumber(state)
  );
}

function getTotalGetRequestNumber(state: State): number {
  return (
    state.getGetCapNumber +
    state.getDescFeatTypeNumber +
    state.getGetPropValNumber +
    state.getGetPropValFiltNumber
  );
}

function getTotalPostRequestNumber(state: State): number {
  return (
    state.postGetCapNumber +
    state.postDescFeatTypeNumber +
    state.postGetPropValNumber +
    state.postGetPropValFiltNumber
  );
}

export {
  chartOptions,
  getMaxRequestNumber,
  getTotalGetRequestNumber,
  getTotalPostRequestNumber
};
