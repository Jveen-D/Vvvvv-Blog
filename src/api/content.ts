import { httpRequest } from '/@/utils/request';
import { Method } from 'axios';

type apiType =
    | 'listMonthArchives'
    | 'listYearArchives'
    | 'listCategories'
    | 'listsPostsByCategorySlug'
    | 'listsAllMenus'
    | 'listsAllMenusTree'
    | 'listsAllOptionsWithListView'
    | 'listsOptionsWithListView'
    | 'postList'
    | 'getPostsBySlug'
    | 'getPostsById'
    | 'listsCommentWithListView'
    | 'listTopComments'
    | 'getsNextPostByCurrentPostId'
    | 'getsPreviousPostByCurrentPostId'
    | 'getBlogStatistics'
    | 'listsTags'
    | 'listsPostsByTagSlug'
    | 'getsBloggerProfile'
    | 'getFriendLink'

export const contentApi = (apiName: apiType, item: any = {}): any => {

    let path = '';
    let method: Method;
    const config: any = {};
    const params: any = {
        api_access_key: 'kingofthekill',
        ...item
    }
    switch (apiName) {
        case 'listMonthArchives': // 获取文章月份归档
            path = '/api/content/archives/month';
            method = 'GET';
            break;
        case 'listYearArchives': // 获取文章年份归档
            path = '/api/content/archives/years';
            method = 'GET';
            break;
        case 'listCategories': // 获取文章分类，不包括首页与友情链接
            path = '/api/content/categories';
            method = 'GET';
            break;
        case 'listsPostsByCategorySlug': // 文章分类列表
            path = `/api/content/categories/${item.sluy}/posts`;
            method = 'GET';
            break;
        case 'listsAllMenus': // 获取所有分类，包括首页与友情链接
            path = '/api/content/menus';
            method = 'GET';
            break;
        case 'listsAllMenusTree': // 获取所有分类，包括首页与友情链接，与listsAllMenus没啥区别
            path = '/api/content/menus/tree_view';
            method = 'GET';
            break;
        case 'listsAllOptionsWithListView': // 各种小选项
            path = '/api/content/options/list_view';
            method = 'GET';
            break;
        case 'listsOptionsWithListView': // 各种小选项，选取一个
            path = `/api/content/options/keys/${item.key}`;
            method = 'GET';
            break;
        case 'postList': // 文章列表
            path = '/api/content/posts';
            method = 'GET';
            break;
        case 'getPostsBySlug': // 获取文章slug列表
            path = '/api/content/posts/slug';
            method = 'GET';
            break;
        case 'getPostsById': // 根据postId获取文章 formatDisabled一定要为false，为false才会返回解析之后的md文档
            path = `/api/content/posts/${item.postId}`;
            method = 'GET';
            break;
        case 'listsCommentWithListView': // 根据postId获取文章评论，评论api已关闭
            path = `/api/content/posts/${item.postId}/comments/list_view`;
            method = 'GET';
            break;
        case 'listTopComments': // 根据postId获取文章置顶评论，评论api已关闭
            path = `/api/content/posts/${item.postId}/comments/top_view`;
            method = 'GET';
            break;
        case 'getsNextPostByCurrentPostId': // 根据postId获取下一篇文章
            path = `/api/content/posts/${item.postId}/next`;
            method = 'GET';
            break;
        case 'getsPreviousPostByCurrentPostId': // 根据postId获取前一篇文章，没有就404
            path = `/api/content/posts/${item.postId}/prev`;
            method = 'GET';
            break;
        case 'getBlogStatistics': // 获取博客统计信息并携带个人信息，去除个人信息移除路径/user
            path = '/api/content/statistics/user';
            method = 'GET';
            break;
        case 'listsTags': // 获取所有的slug
            path = '/api/content/tags';
            method = 'GET';
            break;
        case 'listsPostsByTagSlug': // 根据slug获取文章列表
            path = `/api/content/tags/${item.slug}/posts`;
            method = 'GET';
            break;
        case 'getsBloggerProfile': // 获取博主资料
            path = '/api/content/users/profile';
            method = 'GET';
            break;
        case 'getFriendLink': // 友链列表
            path = '/api/content/links';
            method = 'GET';
            break;
        default:
            break;
    }

    if (path === '') {
        return {};
    }
    // @ts-ignore
    if (method === 'POST' || method === 'post') {
        return httpRequest.post(path, params, config).then(res => res.data);
        // @ts-ignore
    } else if (method === 'GET' || method === 'get') {
        return httpRequest.get(path, { params: params, ...config }).then(res => res.data);
        // @ts-ignore
    } else if (method === 'PUT' || method === 'put') {
        return httpRequest.put(path, params, config).then(res => res.data);
        // @ts-ignore
    } else if (method === 'DELETE' || method === 'delete') {
        return httpRequest.delete(path, { data: params, ...config }).then(res => res.data);
    }
};
