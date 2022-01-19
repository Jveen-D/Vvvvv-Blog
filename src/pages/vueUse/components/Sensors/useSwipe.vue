<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>使用滑动，基于touchEvent，移动端使用</template>
        <template #codeEffect>
            <pre lang="yaml">{{ info }}</pre>
            <div
                ref="container"
                class="bg-gray-200 rounded relative w-full h-[80px] m-auto flex items-center justify-center overflow-hidden"
            >
                <el-button @click="reset">Reset</el-button>
                <div
                    ref="target"
                    class="select-none absolute w-full h-full top-0 left-0 bg-[#3eaf7c] flex items-center justify-center"
                    :class="{'transition-all duration-200 ease-linear': !info.isSwiping}"
                    :style="{ left, opacity }"
                >滑动-></div>
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

import { ref, reactive, computed } from 'vue'
import { useSwipe } from '@vueuse/core'

const container = ref<ElRef>(null)
const target = ref<ElRef>(null)
const containerWidth = computed(() => container.value?.offsetWidth)
const info = reactive(useSwipe(target, {
    onSwipe() {
        if (containerWidth.value) {
            if (info.lengthX < 0) {
                const distance = Math.abs(info.lengthX)
                left.value = `${distance}px`
                opacity.value = 1.25 - distance / containerWidth.value
            }
            else {
                left.value = '0'
                opacity.value = 1
            }
        }
    },
    onSwipeEnd() {
        if (info.lengthX < 0 && containerWidth.value && (Math.abs(info.lengthX) / containerWidth.value) >= 0.5) {
            left.value = '100%'
            opacity.value = 0
        }
        else {
            left.value = '0'
            opacity.value = 1
        }
    }
}))
const left = ref('0')
const opacity = ref(1)

const reset = () => {
  left.value = '0'
  opacity.value = 1
}
</script>