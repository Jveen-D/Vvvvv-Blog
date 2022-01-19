<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>setTimeout</template>
        <template #codeEffect>
            <div class="flex flex-col items-center justify-center">
                <div class="text-sky-500 dark:text-sky-400">Ready: {{ ready.toString() }}</div>
                <el-button @click="() => start()">开始</el-button>
                <el-button
                    @click="() => stop()"
                    class="ml-0 text-white bg-orange-400 border border-orange-400 hover:text-sky-500"
                >暂停</el-button>
            </div>
        </template>
    </AvueUseBaseCom>
</template>
<script lang="ts" setup>
import AvueUseBaseCom from '../AvueUseBaseCom.vue'
// props
const props = defineProps<{
    id: number;
}>();


import { useTimeout } from '@vueuse/core'

const {ready, start, stop } = useTimeout(1000, { controls: true })
</script>