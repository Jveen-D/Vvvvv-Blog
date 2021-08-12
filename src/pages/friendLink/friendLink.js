import { getFriendLink } from '@/api';
export function GetFriendLink(id) {
  return getFriendLink().then((res) => {
    //    console.log(res.data.data);
    return res.data.data;
  });
}
