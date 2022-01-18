<!--
 * @Date: 2022-01-18 15:09:54
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/pages/vueUse/components/Sensors/useDeviceOrientation.vue
-->
<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>为Web 开发人员提供来自运行网页的设备的物理方向的信息</template>
        <template #codeEffect>
            <div v-if="DeviceOrientation.isSupported">
                <pre lang="yaml">{{ DeviceOrientation }}</pre>
            </div>
            <div v-else>web程序暂不支持此api</div>
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
import { useDeviceOrientation } from '@vueuse/core'
const DeviceOrientation = reactive(useDeviceOrientation())
</script>