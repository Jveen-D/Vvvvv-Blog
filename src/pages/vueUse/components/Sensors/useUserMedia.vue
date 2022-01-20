<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>摄像头</template>
        <template #codeEffect>
            <el-button @click="enabled = !enabled">{{ enabled ? 'Stop' : 'Start' }}</el-button>
            <div>
                <div
                    v-for="camera of cameras"
                    :key="camera.deviceId"
                    class="px-2 py-1 cursor-pointer"
                    :class="{ 'text-primary': currentCamera === camera.deviceId }"
                    @click="currentCamera = camera.deviceId"
                >{{ camera.label }}</div>
            </div>
            <div>
                <video ref="video" muted autoplay controls class="wax-w-[400px] max-h-[200px] min-w-[400px] min-h-[200px]" />
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

import { ref, watchEffect } from 'vue'
import { useDevicesList, useUserMedia } from '@vueuse/core'
const currentCamera = ref<string>()
const { videoInputs: cameras } = useDevicesList({
    requestPermissions: true,
    onUpdated() {
        if (!cameras.value.find(i => i.deviceId === currentCamera.value))
            currentCamera.value = cameras.value[0]?.deviceId
    },
})
const video = ref<HTMLVideoElement>()
const { stream, enabled } = useUserMedia({
    videoDeviceId: currentCamera,
})
watchEffect(() => {
    if (video.value)
        video.value.srcObject = stream.value!
})
</script>