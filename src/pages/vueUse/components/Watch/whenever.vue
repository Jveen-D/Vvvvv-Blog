<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>收集所有监听，且可以传递多个回调同步执行</template>
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
whenever(count, () => console.log(count.value))
whenever(
  () => count.value === 7, 
  () => alert('count为7')
)
</script>