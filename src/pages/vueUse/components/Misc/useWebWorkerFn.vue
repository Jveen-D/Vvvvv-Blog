<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>在不阻塞 UI 的情况下运行昂贵的函数，使用 Promise 的简单语法</template>
        <template #codeEffect>
            <pre lang="yaml">result:{{ result }}</pre>
            <pre lang="yaml">workerStatus:{{ workerStatus }}</pre>
            <el-button @click="() => startWebWork()">startWebWork</el-button>
            <el-button @click="() => workerTerminate()">workerTerminate</el-button>
        </template>
    </AvueUseBaseCom>
</template>
<script lang="ts" setup>
import { useWebWorkerFn } from '@vueuse/core';
import { nextTick, ref } from 'vue'
import AvueUseBaseCom from '../AvueUseBaseCom.vue';
// props
const props = defineProps<{
    id: number;
}>();

const heavyTask = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('ok')
        }, 3000)
    })
}
const { workerFn, workerStatus, workerTerminate } = useWebWorkerFn(heavyTask)

const result = ref<any>('')
const startWebWork = async () => {
    result.value = null
    await nextTick()
    result.value = await workerFn()
}

</script>