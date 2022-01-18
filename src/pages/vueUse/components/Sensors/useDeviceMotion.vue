<!--
 * @Date: 2022-01-18 15:00:25
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/pages/vueUse/components/Sensors/useDeviceMotion.vue
-->
<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>为Web人员提供相关设备位置和开发方向变化速度的信息</template>
        <template #codeEffect>
            <pre lang="yaml">{{ DeviceMotion }}</pre>
        </template>
    </AvueUseBaseCom>
</template>

<script lang="ts" setup>
import AvueUseBaseCom from '../AvueUseBaseCom.vue'
// props
const props = defineProps<{
    id: number;
}>();

import { reactive } from 'vue'
import { useDeviceMotion } from '@vueuse/core'
const DeviceMotion = reactive(useDeviceMotion())
</script>