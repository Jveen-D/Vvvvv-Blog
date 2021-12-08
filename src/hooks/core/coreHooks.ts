/*
 * @Date: 2021-12-07 19:33:33
 * @LastEditors: dwj18066042960
 * @LastEditTime: 2021-12-08 14:40:47
 * @FilePath: \Vvvvv-Blog\src\hooks\core\coreHooks.ts
 */
import { computed, ComputedRef } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export const coreHooks = () => {
  const store = useStore();
  const Router = useRouter();
  /**
   * @description: 返回当前模式  dark|light
   * @return {ref} 返回ref
   */
  const getCurrentMode = (): ComputedRef => {
    return computed(() => store.state.mode);
  };

  /**
   * @description: 获取当前路由的分类
   * @return {ref} 返回ref
   */
  const getCurrentSlug = (): ComputedRef => {
    return computed(() => Router.currentRoute.value.params.slug as string);
  };

  /**
   * @description: 获取当前路由id
   * @return {ref} 返回ref
   */
  const getCurrentId = (): ComputedRef => {
    return computed(() => Router.currentRoute.value.params.id as string);
  };

  /**
   * @description: 获取store的shadow
   * @return {ref} 返回ref
   */
  const getShadow = (): ComputedRef => {
    return computed(() => store.state.shadow as string);
  };

  /**
   * @description: 获取store的slug
   * @return {ref} 返回ref
   */  
  const getStoreSlug = (): ComputedRef => {
    return computed(() => store.state.slug as string);
  };
  return { getCurrentMode, getCurrentSlug, getCurrentId, getShadow, getStoreSlug };
};
