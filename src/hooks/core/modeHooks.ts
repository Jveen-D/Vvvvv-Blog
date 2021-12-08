/*
 * @Date: 2021-12-08 13:30:41
 * @LastEditors: dwj18066042960
 * @LastEditTime: 2021-12-08 13:40:16
 * @FilePath: \Vvvvv-Blog\src\hooks\core\modeHooks.ts
 */
import { computed, ComputedRef } from 'vue';
import { useStore } from 'vuex';

export const currentMode = () => {
  /**
   * @description: 返回当前模式  dark|light
   * @return {ref} 返回ref，最好使用常量接收，使用的时候需要.value 例如 mode.value
   */
  const getCurrentMode = (): ComputedRef => {
    const store = useStore();
    return computed(() => store.state.mode);
  };
  return {
    getCurrentMode,
  };
};
