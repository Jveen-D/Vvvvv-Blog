<!--
 * @Date: 2022-01-12 10:45:44
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/pages/vueUse/components/useCssVar.vue
-->

<template>
  <AvueUseBaseCom :id="props.id">
    <template #des>修改css变量</template>
    <template #codeEffect>
      <div ref="el" style="--color: #7fa998; color: var(--color)">Sample text, {{ color }}</div>
      <el-button @click="changeColor">changeColor</el-button>
    </template>
  </AvueUseBaseCom>
</template>

<script lang="ts" setup>
import AvueUseBaseCom from './AvueUseBaseCom.vue'
// props
const props = defineProps<{
  id: number;
}>();

import { ref } from 'vue'
import { useCssVar } from '@vueuse/core'
const el = ref(null)
const color = useCssVar('--color', el)
const changeColor = () => {
  if (color.value === '#df8543')
    color.value = '#7fa998'
  else
    color.value = '#df8543'
}
</script>
