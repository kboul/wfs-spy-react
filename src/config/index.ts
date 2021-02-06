import axios from './axios';
import colors from './colors';
import tags from './tags';

export default Object.freeze({
    axiosConfig: axios,
    colors,
    noOperation: 'This WFS service does not provide ',
    noOption: '---',
    proccessMessage: 'processing request...',
    requests: ['GetCapabilities', 'DescribeFeatureType', 'GetPropertyValue'],
    tags,
    versions: ['2.0.0', '2.0.2']
});
