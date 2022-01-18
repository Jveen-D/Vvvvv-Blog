<!--
 * @Date: 2022-01-18 15:13:32
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/pages/vueUse/components/Sensors/useDevicePixelRatio.vue
-->
<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>提供设备像素比信息</template>
        <template #codeEffect>
            <pre lang="yaml">{{ DevicePixelRatio }}</pre>
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
import { useDevicePixelRatio } from '@vueuse/core'
const DevicePixelRatio = reactive(useDevicePixelRatio())
</script>