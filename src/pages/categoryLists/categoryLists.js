import { listsPostsByCategorySlug,listsPostsByTagSlug } from '/@/api'
// 获取文章列表
export function ListsPostsByCategorySlug(slug) {
    return listsPostsByCategorySlug(slug).then((res)=>{
        return res.data.data
    })
}

// 根据slug获取文章列表
export function ListsPostsByTagSlug(slug) {
    return listsPostsByTagSlug(slug).then((res)=>{
//        console.log(res.data.data)
        return res.data.data
    })
}