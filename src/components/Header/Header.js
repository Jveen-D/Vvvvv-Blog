import { listCategories } from '@/api'

// 文章分类
export function ListCategories() {
  return listCategories().then((res) => {
    //        console.log(res.data.data)
    return res.data.data
  })
}

