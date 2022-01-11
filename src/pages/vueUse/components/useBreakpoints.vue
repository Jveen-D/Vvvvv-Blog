<!--
 * @Date: 2022-01-10 13:57:36
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/pages/vueUse/components/useBreakpoints.vue
-->
<template>
  <div class="w-full h-full pb-4 overflow-y-auto text-gray-700 dark:text-gray-200">
    <div class="px-2 border-b border-[#3C3C43] dark:border-[#585458] border-opacity-[0.12]">
      <b>描述</b>
      <div class="pb-2">判断当前视口，拉伸窗口就可以看到效果</div>
      <b>效果</b>
      <div>
        <div :class="[sm?'text-sky-500 dark:text-sky-400':'']">sm:{{sm}}</div>
        <div :class="[md?'text-sky-500 dark:text-sky-400':'']">md:{{md}}</div>
        <div :class="[lg?'text-sky-500 dark:text-sky-400':'']">lg:{{lg}}</div>
        <div :class="[xl?'text-sky-500 dark:text-sky-400':'']">xl:{{xl}}</div>
        <div :class="[xxl?'text-sky-500 dark:text-sky-400':'']">xxl:{{xxl}}</div>
        <div :class="[xxxl?'text-sky-500 dark:text-sky-400':'']">xxxl:{{xxxl}}</div>
      </div>
    </div>

    <b class="px-2">示例代码</b>
    <div ref="markdownBody" class="px-2 markdown-body"></div>
  </div>
</template>

<script lang="ts" setup>
import { breakpointsTailwind, useBreakpoints } from  '@vueuse/core';
const breakpoints = useBreakpoints(breakpointsTailwind)
/**
 * useBreakpoints(breakpointsTailwind)表示使用tailwindcss提供的断点（sm、md、lg、xl和2xl）
 * tailwindcss的断点文档https://tailwindcss.com/docs/breakpoints
 * 还有其他的断点 例如bootstrap、Vuetify、Ant Design等等，需要更多的断点可以直接去源码里面找找看
 * */ 
const sm = breakpoints.smaller('sm')
const md = breakpoints.between('sm', 'md')
const lg = breakpoints.between('md', 'lg')
const xl = breakpoints.between('lg', 'xl')
const xxl = breakpoints.between('xl', '2xl')
const xxxl = breakpoints.greater('2xl')


import { contentApi } from '/@/api/content';
import '/src/assets/css/markdown-body.scss';
import { reactive,watch,ref } from 'vue';
import { markdownCode } from '/@/utils/markdown/code'
const { language, copy } = markdownCode()
// props
const props = defineProps<{
  id: number;
}>();
const markdownBody = ref<ElRef>(null)
interface State {
  postDetail: any
}
const state = reactive<State>({
  postDetail: {}
})
watch(
  () => props.id,
  (id) => {
    if (id === 0) return
    contentApi('getPostsById', {
      postId: id,
      formatDisabled: false,
      sourceDisabled: true,
    }).then((res) => {
      state.postDetail = res.data;
      document.title = `Vvvvv-Blog! - ` + state.postDetail.title;
      markdownBody.value.innerHTML += state.postDetail.formatContent;
      language()
      // @ts-ignore
      hljs.highlightAll();
    })
  },
  { immediate: true }
)
// @ts-ignore
window.copy = copy
</script>

<style lang="scss" scoped>
@import "/src/assets/css/markdown-body.scss";
</style>
