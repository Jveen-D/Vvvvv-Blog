<!--
 * @Date: 2022-01-10 13:57:36
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/pages/vueUse/components/useBrowserLocation.vue
-->
<template>
  <AvueUseBaseCom :id="props.id">
    <template #des>返回当前浏览器信息</template>
    <template #codeEffect>
      <div v-for="(item,name) in location" :key="name">{{name}} : {{item}}</div>
    </template>
  </AvueUseBaseCom>
</template>

<script lang="ts" setup>
import AvueUseBaseCom from './AvueUseBaseCom.vue'
// props
const props = defineProps<{
  id: number;
}>();

import { useBrowserLocation } from '@vueuse/core'
const location = useBrowserLocation()
</script>

<style lang="scss" scoped>
@import "/src/assets/css/markdown-body.scss";
</style>
