/*
 * @Date: 2021-12-07 19:33:33
 * @LastEditors: dwj18066042960
 * @LastEditTime: 2021-12-08 13:13:09
 * @FilePath: \Vvvvv-Blog\src\hooks\core\currentDevelopment.ts
 */
import { ref, computed, ComputedRef } from 'vue';
import { useRouter } from 'vue-router';

export const currentDevelopment = () => {
  /**
   * @description: 获取环境变量
   * @param {*}
   * @return {*}
   */
  const DEV = computed(() => import.meta.env.VITE_GLOB_APP_TITLE as string);
  /**
   * @description: 获取当前激活的sluy
   * @param {*}
   * @return {*}
   */
  const getCurrentSlug = (): ComputedRef<string> => {
    const Router = useRouter();
    return ref<ComputedRef>(computed(() => Router.currentRoute.value.params.slug as string));
  };
  return { DEV, getCurrentSlug };
};
