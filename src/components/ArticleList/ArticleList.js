import { postList } from '/@/api'
// slug分类
export function PostList(params) {
    return postList(params).then((res)=>{
        return res.data.data
    })
}