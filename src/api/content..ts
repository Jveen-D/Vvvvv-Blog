import { axios } from '/@/utils/request';
import { Method } from 'axios'
type apiType =
    'listMonthArchives' |
    'listYearArchives' |
    'listCategories' |
    'listsPostsByCategorySlug' |
    'listsAllMenus' |
    'listsAllMenusTree' |
    'listsAllOptionsWithListView' |
    'listsOptionsWithListView' |
    'postList' |
    'getPostsBySlug' |
    'getPostsById' |
    'listsCommentWithListView' |
    'listTopComments' |
    'getsNextPostByCurrentPostId' |
    'getsPreviousPostByCurrentPostId' |
    'getBlogStatistics' |
    'listsTags' |
    'listsPostsByTagSlug' |
    'getsBloggerProfile' |
    'getFriendLink'
export const accessManageApi = function (apiName: apiType, item: any = {}): any {

    let path = ''
    let method: Method
    const config: any = {}
    switch (apiName) {

        case 'listMonthArchives': // 取消授权
            path = '/api/v1/auth/deleteAuth'
            method = 'DELETE'
            break;
        default:
            break
    }

    if (path === '') {
        return {}
    }

    if (method === 'POST' || method === 'post') {
        return axios.post(path, item, config).then(res => res.data)
    } else if (method === 'GET' || method === 'get') {
        return axios.get(path, { params: item, ...config }).then(res => res.data)
    } else if (method === 'PUT' || method === 'put') {
        return axios.put(path, item, config).then(res => res.data)
    } else if (method === 'DELETE' || method === 'delete') {
        return axios.delete(path, { data: item, ...config }).then(res => res.data)
    }
}
