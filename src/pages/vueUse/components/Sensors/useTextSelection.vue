<!--
 * @Date: 2022-02-11 15:13:44
 * @LastEditors: dwj18066042960
 * @FilePath: \Vvvvv-Blog\src\pages\vueUse\components\Sensors\useTextSelection.vue
-->
<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>在当前页面选择任意文本</template>
        <template #codeEffect>
            <div>
                <p class="text-blue-600 font-600">You can select any text on the page.</p>
                <p>
                    <strong class="inline-block w-140px">选择的文本:</strong>
                    <em :class="selectedStyle">{{ text || 'No selected' }}</em>
                </p>
                <p>
                    <strong class="inline-block w-140px">选择的位置:</strong>
                    <pre lang="yaml">{{ rects }}</pre>
                </p>
                <p>
                    <strong class="inline-block w-140px">选择大小:</strong>
                    <pre lang="yaml">{{ ranges }}</pre>
                    <pre lang="yaml">{{ selection }}</pre>
                </p>
            </div>
        </template>
    </AvueUseBaseCom>
</template>
<script lang="ts" setup>
import { useTextSelection } from '@vueuse/core';
import { computed } from 'vue';
import AvueUseBaseCom from '../AvueUseBaseCom.vue';
// props
const props = defineProps<{
    id: number;
}>();

const { text, rects, ranges, selection } = useTextSelection()
const selectedStyle = computed(() => text.value ? 'text-primary' : 'text-gray-400')
</script>