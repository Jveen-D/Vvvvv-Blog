<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>接收一个ref类型，并且始终防抖</template>
        <template #codeEffect>
            <pre lang="yaml">count:{{ count }}</pre>
            <pre lang="yaml">countDebounce:{{ countDebounce }}</pre>
            <pre lang="yaml">countDebounce将始终防抖1000ms</pre>
            <el-button @click="add">add count</el-button>
        </template>
    </AvueUseBaseCom>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { useDebounce } from '@vueuse/core';
import AvueUseBaseCom from '../AvueUseBaseCom.vue';
// props
const props = defineProps<{
    id: number;
}>();

const count = ref(0)
const countDebounce = useDebounce(count, 1000)
const add = () => {
    count.value += 1
}
</script>