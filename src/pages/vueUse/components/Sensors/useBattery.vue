<!--
 * @Date: 2022-01-18 14:39:20
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/pages/vueUse/components/Sensors/useBattery.vue
-->
<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>提供有关系统电池电量的信息，如果打开这个页面，将设备断电或者充电就能看到区别了</template>
        <template #codeEffect>
            <div v-if="batteryInfo.isSupported">
                <pre lang="yaml">{{batteryInfo}}</pre>
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
import { useBattery } from '@vueuse/core'
const batteryInfo = reactive(useBattery())
</script>