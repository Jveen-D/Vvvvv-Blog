import {listsPostsByTagSlug } from '/@/api'

// 根据slug获取文章列表
export function ListsPostsByTagSlug(slug) {
    return listsPostsByTagSlug(slug).then((res)=>{
//        console.log(res.data.data)
        return res.data.data
    })
}