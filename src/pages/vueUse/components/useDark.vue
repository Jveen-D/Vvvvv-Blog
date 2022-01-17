<!--
 * @Date: 2022-01-17 10:13:50
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/pages/vueUse/components/useDark.vue
-->
<template>
  <AvueUseBaseCom :id="props.id">
    <template #des>使用暗黑主题</template>
    <template #codeEffect>
      <div>current mode is dark: {{isDark}}</div>
      <el-button @click="()=>toggleDark()">toggle dark</el-button>
    </template>
  </AvueUseBaseCom>
</template>

<script lang="ts" setup>
import AvueUseBaseCom from './AvueUseBaseCom.vue'
// props
const props = defineProps<{
  id: number;
}>();

// 一看就懂 就不多说啥了
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>
