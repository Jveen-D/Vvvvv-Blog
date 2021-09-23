import { listsPostsByCategorySlug, listsPostsByTagSlug } from "/@/api/index";
// 获取文章列表
export const ListsPostsByCategorySlug = (slug):any => {
  return listsPostsByCategorySlug(slug).then((res) => {
    return res.data.data;
  });
}

// 根据slug获取文章列表
export const ListsPostsByTagSlug = (slug):any => {
  return listsPostsByTagSlug(slug).then((res) => {
    //        console.log(res.data.data)
    return res.data.data;
  });
}
