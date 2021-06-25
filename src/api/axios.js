import axios from 'axios'
import {getItem} from '@/helpers/PersistanceStorage'

axios.defaults.baseURL = 'https://conduit.productionready.io/api';

axios.interceptors.request.use(config => {
    const token = getItem('acessToken');
    const authorizationToken = token ? 'Token ' + token : '';
    config.headers.Authorization = authorizationToken;
    return config;
})

export default axios;