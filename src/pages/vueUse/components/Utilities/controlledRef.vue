<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>对 ref 及其反应性的细粒度控制</template>
        <template #codeEffect>
            <div class="flex flex-col">
                <pre lang="yaml">num：{{ num }}</pre>
                <pre lang="yaml">doubled：{{ doubled }}</pre>
                <div class="flex items-center">
                    <el-button class="min-w-[200px] ml-0" @click="add">add</el-button>
                    <p>和普通ref一样修改value值</p>
                </div>
                <div class="flex items-center">
                    <el-button
                        class="min-w-[200px] ml-0 mt-2"
                        @click="setWithoutReactivity"
                    >setWithoutReactivity</el-button>
                    <p>给num赋值30，但是使其失去响应性</p>
                </div>
                <div class="flex items-center">
                    <el-button
                        class="min-w-[200px] ml-0 mt-2"
                        @click="getWithoutReactivity"
                    >getWithoutReactivity</el-button>
                    <p>获取num值，但是此时num依然丧失响应性，打开控制台查看num此时的值</p>
                </div>
                <div class="flex items-center">
                    <el-button
                        class="min-w-[200px] ml-0 mt-2"
                        @click="setNumWithReactivity"
                    >setNumWithReactivity</el-button>
                    <p>给num重新赋予响应性</p>
                </div>
            </div>
        </template>
    </AvueUseBaseCom>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { controlledRef } from '@vueuse/core';
import AvueUseBaseCom from '../AvueUseBaseCom.vue';
// props
const props = defineProps<{
    id: number;
}>();

let num = controlledRef(0)
const doubled = computed(() => num.value * 2)

// 和普通ref一眼修改value值
const add = () => {
    num.value += 1
}

// set value without triggering the reactivity
const setWithoutReactivity = () => {
    num.set(30, false)
}

const getWithoutReactivity = () => {
    console.log(num.get()) // 此时num已经丧失响应性
}

const setNumWithReactivity = () => {
    num.peek()
}
</script>