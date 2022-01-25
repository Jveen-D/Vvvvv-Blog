<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>异步computed，需要传递一个ref来跟踪异步的状态</template>
        <template #codeEffect>
            <pre lang="yaml">evaluating:{{ evaluating }}</pre>
            <pre lang="yaml">info:{{ info }}</pre>
        </template>
    </AvueUseBaseCom>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { asyncComputed } from '@vueuse/core';
import AvueUseBaseCom from '../AvueUseBaseCom.vue';
// props
const props = defineProps<{
    id: number;
}>();

const evaluating = ref(false)
const info = asyncComputed(
    async () => {
        return await new Promise((resolve) => {
            setTimeout(() => {
                resolve('ok')
            }, 3000)
        })
    },
    null,
    { lazy: true, evaluating },
)
</script>