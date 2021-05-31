import { listsPostsByCategorySlug,getPostsById } from '/@/api'
// 获取文章列表
export function ListsPostsByCategorySlug(slug) {
    return listsPostsByCategorySlug(slug).then((res)=>{
        console.log(res.data.data)
        return res.data.data
    })
}

export function GetPostsById() {
    return getPostsById(90).then((res)=>{
        console.log(res.data.data.formatContent)
        return res.data.data
    })
}