<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>响应式鼠标是否在元素里面</template>
        <template #codeEffect>
            <div class="flex">
                <div
                ref="target"
                    class="flex items-center justify-center bg-gray-400 rounded-sm p-[40px]"
                >🤚hover me</div>
                <pre lang="yaml">{{ mouse }}</pre>
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


import { ref, reactive } from 'vue'
import { useMouseInElement } from '@vueuse/core';

const target: ElRef = ref(null)
const mouse = reactive(useMouseInElement(target))
</script>

