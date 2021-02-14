import axios from 'axios';

axios.defaults.baseURL = '/api';

export default { get: axios.get, post: axios.post };
