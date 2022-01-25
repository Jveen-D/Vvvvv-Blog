<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>受控计算controlledComputed，自定义触发条件</template>
        <template #codeEffect>
            <div class="flex flex-col">
                <pre lang="yaml">{{ computedRef }}</pre>
                <div class="flex flex-nowrap">
                    <el-input v-model="a" class="w-[200px]"></el-input>
                    <el-button @click="addA" class="ml-2">Add</el-button>
                    <el-button @click="reduceA">Reduce</el-button>
                </div>
                <div class="flex mt-2 flex-nowrap">
                    <el-input v-model="b" class="w-[200px]"></el-input>
                    <el-button @click="addB" class="ml-2">Add</el-button>
                    <el-button @click="reduceB">Reduce</el-button>
                </div>
            </div>
        </template>
    </AvueUseBaseCom>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { controlledComputed } from '@vueuse/core';
import AvueUseBaseCom from '../AvueUseBaseCom.vue';
// props
const props = defineProps<{
    id: number;
}>();

const a = ref(0)
const b = ref(0)
const addA = () => {
    a.value += 1
}
const addB = () => {
    b.value += 1
}
const reduceA = () => {
    a.value -= 1
}
const reduceB = () => {
    b.value -= 1
}

const computedRef = controlledComputed(
    /**
     * 更改a的值才会将b的值计算给computedRef
     */
    () => a.value,// watch source, same as `watch`
    () => b.value,// computed getter, same as `computed`
)
</script>