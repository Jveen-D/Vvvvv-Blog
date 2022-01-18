<!--
 * @Date: 2022-01-10 13:57:36
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/pages/vueUse/components/useClipboard.vue
-->
<template>
  <AvueUseBaseCom :id="props.id">
    <template #des>浏览器执行复制命令</template>
    <template #codeEffect>
      <div v-if="isSupported">
        <div>text:{{text}}</div>
        <div>copied:{{copied}}</div>
        <el-input class="my-2" v-model="source"></el-input>
        <el-button @click="()=>copy()">copy</el-button>
      </div>
      <div v-else>
        浏览器不支持useClipboard
      </div>
    </template>
  </AvueUseBaseCom>
</template>

<script lang="ts" setup>
import AvueUseBaseCom from '../AvueUseBaseCom.vue'
// props
const props = defineProps<{
  id: number;
}>();

import { ref } from 'vue'
import { useClipboard } from '@vueuse/core'
const source = ref('vueUse yyds!')
const { text, copy, copied, isSupported } = useClipboard({ source })
/**
 * 只有这四个option
 * text:复制的文本
 * copy:执行复制命令
 * copied:是否复制完成，一次完成后会重置会false
 * isSupported:浏览器是否支持
*/

</script>
