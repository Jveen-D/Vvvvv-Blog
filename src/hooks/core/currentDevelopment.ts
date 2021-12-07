/*
 * @Date: 2021-12-07 19:33:33
 * @LastEditors: dwj18066042960
 * @LastEditTime: 2021-12-07 20:28:53
 * @FilePath: \Vvvvv-Blog\src\hooks\core\currentDevelopment.ts
 */
import { ref,computed,ComputedRef,watch } from 'vue';
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
  const getCurrentSluy = () => {
    const Router = useRouter();
    let sluy = ref<ComputedRef>(computed(() => Router.currentRoute.value.params.slug as string))
    console.log(sluy.value)
    return 
  };
  return { DEV, getCurrentSluy };
};
