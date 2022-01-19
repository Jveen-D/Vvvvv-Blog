<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>在当前页面选择任意文本</template>
        <template #codeEffect>
            <div>
                <p class="text-blue-600 font-600">You can select any text on the page.</p>
                <p>
                    <strong class="inline-block w-140px">选择的文本:</strong>
                    <em :class="selectedStyle">{{ state.text || 'No selected' }}</em>
                </p>
                <p>
                    <strong class="inline-block w-140px">选择的位置:</strong>
                    {{ JSON.stringify(position) }}
                </p>
                <p>
                    <strong class="inline-block w-140px">选择大小:</strong>
                    {{ JSON.stringify(size) }}
                </p>
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

import { computed } from 'vue'
import { useTextSelection } from '@vueuse/core'
const state = useTextSelection()
const selectedStyle = computed(() => state.value.text ? 'text-primary' : 'text-gray-400')
const position = computed(() => ({ top: state.value.top, right: state.value.right, bottom: state.value.bottom, left: state.value.left }))
const size = computed(() => ({ width: state.value.width, height: state.value.height }))
</script>