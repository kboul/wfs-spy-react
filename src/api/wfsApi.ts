import client from './client';

const axiosConfig = {
    headers: {
        'Content-Type': 'text/plain;charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
    }
};

const getWfsRequest = (apiEndpoint: string) => client.get(apiEndpoint);

const postWfsRequest = (data: Object) => client.post('', data, axiosConfig);

export default { getWfsRequest, postWfsRequest };
