<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>带回调的setTimeout</template>
        <template #codeEffect>
            <div class="flex flex-col items-center justify-center">
                <div>{{ times }}</div>
                <div
                    class="text-sky-500 dark:text-sky-400"
                >isPending: {{ isPending ? '正在执行' : '结束' }}</div>
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

import { ref } from 'vue'
import { useTimeoutFn } from '@vueuse/core'

const times = ref(3)
const { isPending, start, stop } = useTimeoutFn(() => {
    if (times.value <= 0) {
        stop()
        times.value = 3
    } else {
        times.value -= 1
        start()
    }
}, 1000)
</script>