<!--
 * @Date: 2022-03-20 16:34:38
 * @LastEditors: dwj18066042960
 * @FilePath: \Vvvvv-Blog\src\pages\vueUse\components\Elements\useDraggable.vue
-->
<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>拖拽，注意fixed属性是必须要加上的</template>
        <template #codeEffect>
            <div class="h-[100px]">
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
            </div>
        </template>
    </AvueUseBaseCom>
</template>

<script lang="ts" setup>
import { useDraggable } from '@vueuse/core';
import { isClient } from '@vueuse/shared';
import { ref } from 'vue';
import AvueUseBaseCom from '../AvueUseBaseCom.vue';
// props
const props = defineProps<{
    id: number;
}>();


const innerWidth = isClient ? window.innerWidth : 200
const el: ElRef = ref(null)
const { x, y, style } = useDraggable(el, {
    initialValue: { x: innerWidth / 4.2, y: 90 },
    preventDefault: true,
})
</script>

