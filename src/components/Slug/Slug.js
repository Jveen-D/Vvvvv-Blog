import { listsTags } from '/@/api'
// slug分类
export function ListsTags() {
    return listsTags().then((res)=>{
//        console.log(res.data.data)
        return res.data.data
    })
}
