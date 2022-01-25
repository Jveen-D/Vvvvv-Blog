<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>和||逻辑一样，不管变量是不是为ref类型，转换为布尔值之后再判断</template>
        <template #codeEffect>
            <pre lang="yaml">a:{{ a }}</pre>
            <pre lang="yaml">b:{{ b }}</pre>
            <pre lang="yaml">and:{{ c }}</pre>
            <el-button @click="toggleA">toggleA</el-button>
            <el-button @click="toggleB">toggleB</el-button>
        </template>
    </AvueUseBaseCom>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { or } from '@vueuse/core';
import AvueUseBaseCom from '../AvueUseBaseCom.vue';
// props
const props = defineProps<{
    id: number;
}>();

const a = ref(true)
const b = ref(true)
const c: any = or(a, b)

const toggleA = () => {
    a.value = !a.value
}
const toggleB = () => {
    b.value = !b.value
}
</script>