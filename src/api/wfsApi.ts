import client from './client';

const axiosConfig = (url: string) => ({
    headers: {
        'Content-Type': 'text/plain;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        url
    }
});

const getWfsRequest = (apiEndpoint: string, url: string) =>
    client.get(apiEndpoint, { headers: { url } });

const postWfsRequest = (data: Object, url: string) =>
    client.post('', data, axiosConfig(url));

export default { getWfsRequest, postWfsRequest };
