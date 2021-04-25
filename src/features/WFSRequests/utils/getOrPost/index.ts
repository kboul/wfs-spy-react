import isMethodGet from '../isMethodGet';

export default function getOrPost(httpMethod: string): string {
    return isMethodGet(httpMethod) ? 'get' : 'post';
}
