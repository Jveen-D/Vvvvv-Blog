<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>接收一个函数，并且始终防抖</template>
        <template #codeEffect>
            <pre lang="yaml">count:{{ count }}</pre>
            <pre lang="yaml">countDebounceFn将始终防抖1000ms</pre>
            <el-button @click="countDebounceFn">countDebounceFn</el-button>
        </template>
    </AvueUseBaseCom>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { useDebounceFn } from '@vueuse/core';
import AvueUseBaseCom from '../AvueUseBaseCom.vue';
// props
const props = defineProps<{
    id: number;
}>();

const count = ref(0)
const countDebounceFn = useDebounceFn(() => {
    count.value += 1
}, 1000)
</script>