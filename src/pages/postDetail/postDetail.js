import { getPostsById } from "@/api";
export function GetPostsById(id) {
  return getPostsById(id).then((res) => {
    //        console.log(res.data.data)
    return res.data.data;
  });
}
