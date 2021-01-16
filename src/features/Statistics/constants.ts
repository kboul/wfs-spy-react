export default {
    header: 'Statistics',
    descr: `This section provides statistics derived from the GetCapabilities, 
        DescribeFeatureType & GetPropertyValue (Filter) responses.`,
    respTimeHeader: 'HTTP Response Time',
    respTimeDescr: 'Plots WFS latest Get & Post response times in milliseconds',
    reqTimeHeader: 'Individual & Total HTTP Request Number',
    reqTimeDescr: 'Plots WFS Get & Post individual & total request number',
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
