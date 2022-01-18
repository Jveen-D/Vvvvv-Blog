<!--
 * @Date: 2022-01-18 15:16:03
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/pages/vueUse/components/Sensors/useDevicesList.vue
-->
<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>列出可用的输入/输出设备</template>
        <template #codeEffect>
            <carbon:camera />
            <carbon:microphone />
            <carbon:headphones />
            <div class="title">Camera ({{ cameras.length }})</div>
            <div class="title">Microphones ({{ microphones.length }})</div>
            <div class="title">Speakers ({{ speakers.length }})</div>
            <div>
                <div v-for="i of cameras" :key="i.deviceId" text="sm">{{ i.label }}</div>
            </div>

            <div>
                <div v-for="i of microphones" :key="i.deviceId" text="sm">{{ i.label }}</div>
            </div>

            <div>
                <div v-for="i of speakers" :key="i.deviceId" text="sm">{{ i.label }}</div>
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

import { useDevicesList } from '@vueuse/core'
const {
    videoInputs: cameras,
    audioInputs: microphones,
    audioOutputs: speakers,
} = useDevicesList({
    requestPermissions: true,
})
</script>