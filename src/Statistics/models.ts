interface IStatistics {}

interface IChartOpts {
    chart: {
        type: string;
    };
    title: {
        text: string;
    };
    subtitle: {
        text: string;
    };
    xAxis: {
        categories: string[];
        title: {
            text: string | null;
        };
        labels: {
            style: {
                font: string;
                fontWeight: string;
            };
        };
    };
    yAxis: {
        allowDecimals: boolean | null;
        min: number;
        max: number | null;
        title: {
            style: {
                font: string;
                fontWeight: string;
            };
            text: string;
            align: string;
        };
        labels: {
            overflow: string;
        };
    };
    tooltip: {
        valueSuffix: string;
    };
    colors: string[];
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: boolean;
                formatter: (this: any) => number | null;
            };
        };
    };
    legend: {
        layout: string;
        align: string;
        verticalAlign: string;
        x: number;
        y: number;
        floating: true;
        borderWidth: number;
        backgroundColor: string;
        shadow: true;
    };
    credits: {
        enabled: boolean;
    };
    series: { name: string; data: number[] }[];
}

export type { IStatistics, IChartOpts };
