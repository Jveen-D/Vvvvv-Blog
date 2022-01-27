<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>收集所有监听</template>
        <template #codeEffect>
            <pre lang="yaml">count：{{count}}</pre>
            <el-button @click="add">add</el-button>
            <el-button @click="reduce">reduce</el-button>
        </template>
    </AvueUseBaseCom>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { whenever } from '@vueuse/core';
import AvueUseBaseCom from '../AvueUseBaseCom.vue';
// props
const props = defineProps<{
    id: number;
}>();

const count = ref(0)
const add = ()=>count.value += 1
const reduce = ()=>count.value -= 1
/** 
 * 第一个参数为数据源或者条件，当为数据源时数据源变化才会执行cb，当为条件时条件为true才会执行cb
 * 第二个参数为cb，当第一个参数为true时执行
*/
whenever(count, () => console.log(count.value))
whenever(
  () => count.value === 7, 
  () => alert('count为7')
)
</script>