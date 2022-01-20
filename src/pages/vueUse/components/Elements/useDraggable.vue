<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>拖拽，注意fixed属性是必须要加上的</template>
        <template #codeEffect>
            <div
                ref="el"
                :style="style"
                style="touch-action:none;"
                class="fixed flex flex-col items-center justify-center py-2 w-[200px] bg-white select-none cursor-move"
            >
                <div class="text-black">👋 Drag me!</div>
                <div
                    class="text-sm text-gray-800 opacity-50"
                >I am at {{ Math.round(x) }}, {{ Math.round(y) }}</div>
            </div>
            <div class="h-[100px]"></div>
        </template>
    </AvueUseBaseCom>
</template>

<script lang="ts" setup>
import AvueUseBaseCom from '../AvueUseBaseCom.vue'
// props
const props = defineProps<{
    id: number;
}>();

import { isClient } from '@vueuse/shared'
import { ref } from 'vue'
import { useDraggable } from '@vueuse/core';

const innerWidth = isClient ? window.innerWidth : 200
const el: ElRef = ref(null)
const { x, y, style } = useDraggable(el, {
    initialValue: { x: innerWidth / 4.2, y: 90 },
    preventDefault: true,
})
</script>

