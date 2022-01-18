/*
 * @Date: 2022-01-18 10:24:37
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/hooks/core/highlight.ts
 */

import { useScriptTag } from '@vueuse/core';
export const highlight = () => {
  useScriptTag(
    'https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.0.0/build/highlight.min.js',
    // on script tag loaded.
    (el: HTMLScriptElement) => {
      // do something
      console.log(el);
      console.log('highlight.min.js已加载');
      // @ts-ignore
      hljs.highlightAll();
    }
  );
};
