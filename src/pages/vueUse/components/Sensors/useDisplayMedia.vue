<!--
 * @Date: 2022-01-18 15:27:07
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/pages/vueUse/components/Sensors/useDisplayMedia.vue
-->
<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>流媒体</template>
        <template #codeEffect>
            <el-button @click="() => start()">start</el-button>
            <el-button @click="() => stop()">stop</el-button>
            <div class="flex justify-center items-center">
                <video class="w-auto max-h-[400px]" ref="video" muted autoplay controls />
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
import { watchEffect, ref } from 'vue'
import { useDisplayMedia } from '@vueuse/core'
const { stream, start, stop } = useDisplayMedia()

const video = ref<HTMLVideoElement>()
watchEffect(() => {
    if (video.value) video.value.srcObject = stream.value!
})
</script>
