/*
 * @Date: 2021-12-07 19:33:33
 * @LastEditors: dwj18066042960
 * @LastEditTime: 2021-12-08 13:38:10
 * @FilePath: \Vvvvv-Blog\src\hooks\core\slugHooks.ts
 */
import { computed, ComputedRef } from 'vue';
import { useRouter } from 'vue-router';

export const currentSlug = () => {
  /**
   * @description: 获取当前激活的slug
   * @return {ref} 返回ref，最好使用常量接收，使用的时候需要.value 例如 slug.value
   */
  const getCurrentSlug = (): ComputedRef => {
    const Router = useRouter();
    return computed(() => Router.currentRoute.value.params.slug as string);
  };
  return { getCurrentSlug };
};
