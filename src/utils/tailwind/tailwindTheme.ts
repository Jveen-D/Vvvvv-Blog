/*
 * @Date: 2021-12-25 10:18:54
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/utils/tailwind/tailwindTheme.ts
 */
import { useStore } from 'vuex';
/**
 * @description: 切换模式
 * @param {*}
 * @return {*}
 */
export const tailwindTheme = () => {
  const store = useStore();
  const changeTheme = (theme: string) => {
    if ('theme' in localStorage && theme === '') {
      // Whenever the user explicitly chooses to respect the OS preference
      localStorage.removeItem('theme');
    } else if (theme === 'light') {
      // Whenever the user explicitly chooses light mode
      localStorage.theme = 'light';
    } else if (theme === 'dark') {
      // Whenever the user explicitly chooses dark mode
      localStorage.theme = 'dark';
    }
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    store.dispatch('ChangeMode', localStorage.theme);
  };
  return {
    changeTheme,
  };
};
