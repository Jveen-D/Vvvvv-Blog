import { httpRequest } from '/@/utils/request';

/**
 * 获取文章月份归档
 * @method listMonthArchives
 */
export function listMonthArchives() {
  return httpRequest({ url: '/content/archives/month', method: 'get' });
}

/**
 * 获取文章年份归档
 * @method listYearArchives
 */
export function listYearArchives() {
  return httpRequest({ url: '/content/archives/years', method: 'get' });
}

/**
 * 获取文章分类，不包括首页与友情链接
 * @method listCategories
 */
export function listCategories() {
  return httpRequest({ url: '/content/categories', method: 'get' });
}

/**
 * 文章分类列表
 * @method listsPostsByCategorySlug
 * @param {string} sluy 类型
 */
export function listsPostsByCategorySlug(sluy) {
  return httpRequest({ url: `/content/categories/${sluy}/posts`, method: 'get' });
}

/**
 * 获取所有分类，包括首页与友情链接
 * @method listsAllMenus
 */
export function listsAllMenus() {
  return httpRequest({ url: 'content/menus', method: 'get' });
}

/**
 *  获取所有分类，包括首页与友情链接，与listsAllMenus没啥区别
 * @method listsAllMenusTree
 */
export function listsAllMenusTree() {
  return httpRequest({ url: 'content/menus/tree_view', method: 'get' });
}

/**
 *  各种小选项
 * @method listsAllOptionsWithListView
 */
export function listsAllOptionsWithListView() {
  return httpRequest({ url: '/content/options/list_view', method: 'get' });
}

/**
 *  各种小选项，选取一个
 * @method listsOptionsWithListView
 */
export function listsOptionsWithListView(key) {
  return httpRequest({ url: `/content/options/keys/${key}`, method: 'get' });
}

/**
 *  文章列表
 * @method postList
 * @param {number} page - 页数
 * @param {number} size - 大小
 * @param {array} sort - 排序
 */
export function postList(params) {
  return httpRequest({ url: '/content/posts', method: 'get', params });
}

/**
 * 获取文章slug列表
 * @method getPostsBySlug
 * @param {string} slug - 必填，类型
 */
export function getPostsBySlug(params) {
  return httpRequest({ url: '/content/posts/slug', method: 'get', params });
}

/**
 * 根据postId获取文章 formatDisabled一定要为false，为false才会返回解析之后的md文档
 * @method getPostsById
 * @param {string} postId - 必填，文章id
 */
export function getPostsById(postId) {
  return httpRequest({
    url: `/content/posts/${postId}`,
    method: 'get',
    params: {
      formatDisabled: false,
      sourceDisabled: true,
    },
  });
}

/**
 * 根据postId获取文章评论，评论api已关闭
 * @method listsCommentWithListView
 * @param {string} postId - 必填，文章id
 */
export function listsCommentWithListView(postId) {
  return httpRequest({
    url: `/content/posts/${postId}/comments/list_view`,
    method: 'get',
  });
}

/**
 * 根据postId获取文章置顶评论，评论api已关闭
 * @method listTopComments
 * @param {string} postId - 必填，文章id
 */
export function listTopComments(postId) {
  return httpRequest({
    url: `/content/posts/${postId}/comments/top_view`,
    method: 'get',
  });
}

/**
 * 根据postId获取下一篇文章
 * @method getsNextPostByCurrentPostId
 * @param {string} postId - 必填，文章id
 */
export function getsNextPostByCurrentPostId(postId) {
  return httpRequest({ url: `/content/posts/${postId}/next`, method: 'get' });
}

/**
 * 根据postId获取前一篇文章，没有就404
 * @method getsPreviousPostByCurrentPostId
 * @param {string} postId - 必填，文章id
 */
export function getsPreviousPostByCurrentPostId(postId) {
  return httpRequest({ url: `/content/posts/${postId}/prev`, method: 'get' });
}

/**
 * 获取博客统计信息并携带个人信息，去除个人信息移除路径/user
 * @method getBlogStatistics
 */
export function getBlogStatistics() {
  return httpRequest({ url: '/content/statistics/user', method: 'get' });
}

/**
 * 获取所有的slug
 * @method listsTags
 */
export function listsTags() {
  return httpRequest({ url: '/content/tags', method: 'get' });
}

/**
 * 根据slug获取文章列表
 * @method listsPostsByTagSlug
 */
export function listsPostsByTagSlug(slug) {
  return httpRequest({ url: `/content/tags/${slug}/posts`, method: 'get' });
}

/**
 * 获取博主资料
 * @method getsBloggerProfile
 */
export function getsBloggerProfile() {
  return httpRequest({ url: '/content/users/profile', method: 'get' });
}

export function getFriendLink() {
  return httpRequest({ url: '/content/links', method: 'get' });
}
