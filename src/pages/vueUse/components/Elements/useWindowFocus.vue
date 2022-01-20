<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>window.onfocus使用和window.onblur事件响应式跟踪窗口焦点</template>
        <template #codeEffect>
            <div class="flex items-center justify-center py-4 text-black bg-gray-200 rounded-lg">{{focused?'🎉inside':'outside'}}</div>
        </template>
    </AvueUseBaseCom>
</template>

<script lang="ts" setup>
import AvueUseBaseCom from '../AvueUseBaseCom.vue'
// props
const props = defineProps<{
    id: number;
}>();

import { useWindowFocus } from '@vueuse/core';

const focused = useWindowFocus()
</script>

    