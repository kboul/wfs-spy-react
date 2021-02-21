import axios from 'axios';

const axiosConfig = {
    headers: {
        'Content-Type': 'text/plain;charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
    }
};

const getWfsRequest = (apiEndpoint: string) => axios.get(apiEndpoint);

const postWfsRequest = (apiEndpoint: string, data: Object) =>
    axios.post(apiEndpoint, data, axiosConfig);

export default { getWfsRequest, postWfsRequest };
