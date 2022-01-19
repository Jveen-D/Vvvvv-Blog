<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>过渡，很好玩</template>
        <template #codeEffect>
            <div class="flex flex-col items-center justify-center">
                <div
                    class="w-full h-[200px] flex justify-center items-end border border-white border-opacity-20"
                >
                    <div class="flex flex-col-reverse items-center w-[30px]">
                        <div
                            :style="firstStyle"
                            class="w-[20px] bg-orange-400 text-sky-500 dark:text-sky-400"
                        ></div>
                        <span>{{ cubicBezierNumber.toFixed(0) === '0' ? '' : cubicBezierNumber.toFixed(0) }}</span>
                    </div>
                    <div class="flex flex-col-reverse items-center w-[30px]">
                        <div
                            :style="secStyle"
                            class="w-[20px] bg-purple-400 text-sky-500 dark:text-sky-400"
                        ></div>
                        <span>{{ secTransitionNumber.toFixed(0) === '0' ? '' : secTransitionNumber.toFixed(0) }}</span>
                    </div>
                </div>
                <el-button class="mt-2" @click="toggle">toggle</el-button>
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

import { ref, CSSProperties, computed } from 'vue'
import { TransitionPresets, useTransition } from '@vueuse/core'
const duration = 1000 // 持续时间

// 第一个柱状图
const firstNumber = ref(0)
const cubicBezierNumber = useTransition(firstNumber, {
    duration,// 持续时间
    transition: [0.75, 0, 0.25, 1] // 贝塞尔曲线
})
const firstStyle = computed((): CSSProperties => {
    return {
        height: cubicBezierNumber.value + 'px'
    }
})

// 第二个柱状图
const secNumber = ref(0)
const secTransitionNumber = useTransition(secNumber, {
    duration,// 持续时间
    transition: TransitionPresets.linear // 通过TransitionPresets使用其他过渡
})
const secStyle = computed((): CSSProperties => {
    return {
        height: secTransitionNumber.value + 'px'
    }
})

const toggle = () => {
    firstNumber.value = firstNumber.value === 100 ? 0 : 100
    secNumber.value = secNumber.value === 120 ? 0 : 120
}
</script>