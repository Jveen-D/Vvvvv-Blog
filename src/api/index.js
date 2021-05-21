import { axios } from '/@/utils/request'

export function indexInfo () {
    return axios({ url: '/content/archives/months', method: 'get' })
}