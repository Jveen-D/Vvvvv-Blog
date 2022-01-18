<!--
 * @Date: 2022-01-10 13:57:36
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/pages/vueUse/components/useBreakpoints.vue
-->
<template>
  <AvueUseBaseCom :id="props.id">
    <template #des>返回当前激活的dom节点</template>
    <template #codeEffect>
      <div :class="[sm ? 'text-sky-500 dark:text-sky-400' : '']">sm:{{ sm }}</div>
      <div :class="[md ? 'text-sky-500 dark:text-sky-400' : '']">md:{{ md }}</div>
      <div :class="[lg ? 'text-sky-500 dark:text-sky-400' : '']">lg:{{ lg }}</div>
      <div :class="[xl ? 'text-sky-500 dark:text-sky-400' : '']">xl:{{ xl }}</div>
      <div :class="[xxl ? 'text-sky-500 dark:text-sky-400' : '']">xxl:{{ xxl }}</div>
      <div :class="[xxxl ? 'text-sky-500 dark:text-sky-400' : '']">xxxl:{{ xxxl }}</div>
    </template>
  </AvueUseBaseCom>
</template>

<script lang="ts" setup>
import AvueUseBaseCom from '../AvueUseBaseCom.vue'
// props
const props = defineProps<{
  id: number;
}>();

import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';
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

</script>

