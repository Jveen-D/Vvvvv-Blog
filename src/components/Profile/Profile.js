import { getBlogStatistics } from '@/api';
// 博主&统计信息
export function GetsBloggerProfile() {
  return getBlogStatistics().then((res) => {
    return res.data.data;
  });
}
