import { getFriendLink } from '/@/api';
export function GetFriendLink() {
  return getFriendLink().then((res) => {
    //    console.log(res.data.data);
    return res.data.data;
  });
}
