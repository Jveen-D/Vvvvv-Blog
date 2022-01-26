<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>将一个函数转换为响应式函数，转换后的函数接受 refs 作为其参数并返回一个具有正确类型的 ComputedRef。</template>
        <template #codeEffect>
            <div class="flex flx-col"></div>
            <el-input v-model="a" class="w-[200px] mt-2" type="number"></el-input>
            <el-input v-model="b" class="w-[200px] mt-2" type="number"></el-input>
            <pre lang="yaml">sum：{{ sum }}</pre>
        </template>
    </AvueUseBaseCom>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { reactify } from '@vueuse/core';
import AvueUseBaseCom from '../AvueUseBaseCom.vue';
// props
const props = defineProps<{
    id: number;
}>();

const add = (a: number, b: number): number => {
    return Number(a) + Number(b)
}
const reactiveAdd = reactify(add)
const a = ref(0)
const b = ref(0)
const sum = reactiveAdd(a, b)


</script>