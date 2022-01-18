/*
 * @Date: 2022-01-07 11:03:05
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/hooks/core/coreHooks.ts
 */
import { computed, ComputedRef } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export const coreHooks = () => {
  const store = useStore();
  const Router = useRouter();
  /**
   * @description: 获取当前环境development或者production
   * @param {*}
   * @return {*}
   */
  const getNodeEnv = (): ComputedRef => {
    return computed(() => import.meta.env.VITE_NODE_ENV);
  };
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
  /**
   * @description: dispatch ChangeSlug
   * @param {*}
   * @return {*}
   */
  const dispatchChangeSlug = (val) => { 
    store.dispatch('ChangeSlug', val);
  }
  /**
   * @description: 获取当前路由vueUse的组件name(component)
   * @return {ref} 返回ref
   */
   const getCurrentComponentName = (): ComputedRef => {
    return computed(() => Router.currentRoute.value.params.component as string);
   };
  return { getNodeEnv, getCurrentMode, getCurrentSlug, getCurrentId, getShadow, getStoreSlug, dispatchChangeSlug,getCurrentComponentName };
};
