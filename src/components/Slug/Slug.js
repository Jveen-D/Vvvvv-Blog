import { listsTags } from '/@/api'
import { reactive } from 'vue'
// slug分类
export function ListsTags() {
    return listsTags().then((res)=>{
//        console.log(res.data.data)
        return reactive(res.data.data)
    })
}
