import { getsBloggerProfile, listCategories } from '/@/api'

// 博主信息
export function GetsBloggerProfile() {
    return getsBloggerProfile().then((res)=>{
//        console.log(res.data.data)
        return res.data.data
    })
}

// 文章分类
export function ListCategories() {
    return listCategories().then((res)=>{
//        console.log(res.data.data)
        return res.data.data
    })
}

