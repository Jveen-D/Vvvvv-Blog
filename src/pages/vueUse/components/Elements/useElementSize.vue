<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>响应式元素尺寸</template>
        <template #codeEffect>
            <div ref="el" class="w-[300px] h-[300px] bg-gray-300">
                <pre class="text-black" lang="yaml">{{ rect }}</pre>
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

import { reactive, ref } from 'vue';
import { useElementSize } from '@vueuse/core';

const el: ElRef = ref(null)
const rect = reactive(useElementSize(el))
</script>

