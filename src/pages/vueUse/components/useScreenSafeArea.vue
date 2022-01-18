<!--
 * @Date: 2022-01-18 09:47:03
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/pages/vueUse/components/useScreenSafeArea.vue
-->
<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>查询屏幕安全区域，pc看的不直观，可以在手机浏览器看</template>
        <template #codeEffect>
            <pre lang="yaml">top:{{ top }}</pre>
            <pre lang="yaml">right:{{ right }}</pre>
            <pre lang="yaml">bottom:{{ bottom }}</pre>
            <pre lang="yaml">left:{{ left }}</pre>
        </template>
    </AvueUseBaseCom>
</template>

<script lang="ts" setup>
import AvueUseBaseCom from './AvueUseBaseCom.vue'
// props
const props = defineProps<{
    id: number;
}>();

import { useScreenSafeArea } from '@vueuse/core'

const {
  top,
  right,
  bottom,
  left,
} = useScreenSafeArea()

</script>