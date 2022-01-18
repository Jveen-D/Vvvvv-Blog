<!--
 * @Date: 2022-01-18 16:47:02
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/pages/vueUse/components/Sensors/useFps.vue
-->
<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>用于检查元素中是否存在焦点,对组件也适用</template>
        <template #codeEffect>
            <div>帧数：{{fps}}</div>
        </template>
    </AvueUseBaseCom>
</template>

<script lang="ts" setup>
import AvueUseBaseCom from '../AvueUseBaseCom.vue'
// props
const props = defineProps<{
    id: number;
}>();

import { useFps } from '@vueuse/core'
const fps = useFps()
</script>