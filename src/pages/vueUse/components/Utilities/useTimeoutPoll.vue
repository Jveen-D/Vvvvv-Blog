<!--
 * @Date: 2022-03-18 16:23:35
 * @LastEditors: dwj18066042960
 * @FilePath: \Vvvvv-Blog\src\pages\vueUse\components\Utilities\useTimeoutPoll.vue
-->
<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>定时器轮询，控制轮询开始和暂停</template>
        <template #codeEffect>
            <div>count:{{ count }}</div>
            <div>isActive:{{ isActive }}</div>
            <div class="flex">
                <el-button @click="pause">pause</el-button>
                <el-button @click="resume">resume</el-button>
            </div>
        </template>
    </AvueUseBaseCom>
</template>
<script lang="ts" setup>
import { useTimeoutPoll } from '@vueuse/core';
import { ref } from 'vue';
import AvueUseBaseCom from '../AvueUseBaseCom.vue';
// props
const props = defineProps<{
    id: number;
}>();

const count = ref(0)
const fn = async () => {
    await Promise.resolve(setTimeout(() => {
        count.value++
    }, 1000))
}
const { isActive, pause, resume } = useTimeoutPoll(fn, 1000)
</script>