export default {
    header: 'Statistics',
    descr:
        'This section provides statistics derived from the GetCapabilities, DescribeFeatureType & GetPropertyValue (Filter) responses.',
    respTimeCardHeader: 'HTTP Response Time',
    respTimeCardTitle:
        'Plots WFS latest Get & Post response times in milliseconds',
    reqTimeCardHeader: 'Individual & Total HTTP Request Number',
    reqTimeCardTitle: 'Plots WFS Get & Post individual & total request number',
    timeSeries: [
        {
            name: 'GetCapabilities',
            data: []
        },
        {
            name: 'DescribeFeatureType',
            data: []
        },
        {
            name: 'GetPropertyValue',
            data: []
        },
        {
            name: 'GetPropertyValue Filter',
            data: []
        }
    ],
    numberSeries: [
        {
            name: 'GetCapabilities',
            data: []
        },
        {
            name: 'DescribeFeatureType',
            data: []
        },
        {
            name: 'GetPropertyValue',
            data: []
        },
        {
            name: 'GetPropertyValue Filter',
            data: []
        },
        {
            name: 'Total Number',
            data: []
        }
    ]
};
