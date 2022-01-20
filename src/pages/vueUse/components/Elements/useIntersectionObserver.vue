<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>元素可见性，和useElementVisibility有点像但是作用的元素不同</template>
        <template #codeEffect>
            <div class="flex items-center">
                <div ref="root" class="w-[300px] h-[400px] bg-white overflow-y-scroll text-black">
                    <div ref="target" class="w-full py-2 border border-b-blue-300">target at left&top</div>
                    <div class="w-full h-[300px]">left&middle</div>
                    <div class="w-full h-[300px]">left&middle</div>
                </div>
                <div>{{ isVisible ? '可见' : '不可见' }}</div>
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


import { ref, Ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core';

const root: ElRef = ref(null)
const target: ElRef = ref(null)
const isVisible: Ref<boolean> = ref(false)

useIntersectionObserver(
    target,
    ([{ isIntersecting }]) => {
        isVisible.value = isIntersecting
    },
    { root },
)
</script>

