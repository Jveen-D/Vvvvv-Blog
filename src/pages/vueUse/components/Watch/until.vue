<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>满足条件时监听</template>
        <template #codeEffect>
            <pre lang="yaml">字符串长度:{{ strLen }}</pre>
            <pre lang="yaml">字符串长度大于10时停止监听</pre>
            <el-input class="w-[200px]" v-model="input"></el-input>
            <pre lang="yaml">是否正在监听:{{ stop }}</pre>
        </template>
    </AvueUseBaseCom>
</template>
<script lang="ts" setup>
import AvueUseBaseCom from '../AvueUseBaseCom.vue';
// props
const props = defineProps<{
    id: number;
}>();

import { ref } from 'vue';
import { until } from '@vueuse/core';

const strLen = ref(0)
const input = ref('')
const stop = ref(true)
until(input).toMatch(v => {
    if (v.length > 10) {
        stop.value = false
    } else {
        strLen.value = v.length
    }
})
</script>