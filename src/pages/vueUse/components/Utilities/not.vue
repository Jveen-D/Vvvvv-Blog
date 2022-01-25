<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>和!逻辑一样，不管变量是不是为ref类型，转换为布尔值之后再判断，但是这个这个工具函数只能有一个参数</template>
        <template #codeEffect>
            <pre lang="yaml">a:{{ a }}</pre>
            <pre lang="yaml">and:{{ c }}</pre>
            <el-button @click="toggleA">toggleA</el-button>
        </template>
    </AvueUseBaseCom>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { not } from '@vueuse/core';
import AvueUseBaseCom from '../AvueUseBaseCom.vue';
// props
const props = defineProps<{
    id: number;
}>();

const a = ref(true)
const c: any = not(a)

const toggleA = () => {
    a.value = !a.value
}
</script>