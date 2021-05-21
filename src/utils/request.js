import axios from 'axios'
import config from '/@/config/index.js'
const httpRequest = axios.create({
    baseURL: config.api,
    timeout: config.timeout * 1000,
    params:{
        api_access_key:config.api_access_key
    }
})

export {httpRequest as axios}