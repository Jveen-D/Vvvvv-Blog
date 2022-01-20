<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>跟踪 ref 的更改历史，还提供撤消和重做功能，具备节流配置</template>
        <template #codeEffect>
            <el-button class="px-8" @click="() => inc()">+</el-button>
            <el-button class="px-8" @click="() => dec()">-</el-button>
            <el-button v-if="canUndo" @click="() => undo()">撤消</el-button>
            <el-button v-if="canRedo" @click="() => redo()">重做</el-button>
            <div v-for="i in history" :key="i.timestamp">
                <span class="mr-2 font-mono opacity-50">{{ format(i.timestamp) }}</span>
                <span class="font-mono">{ value: {{ i.snapshot }} }</span>
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

import dayjs from 'dayjs'
import {ref,Ref} from 'vue'
import { useThrottledRefHistory } from '@vueuse/core'
import { useCounter } from '@vueuse/shared'

const delay: Ref<number> = ref(1000)
const format = (ts: number) => dayjs(ts).format()
const { count, inc, dec } = useCounter()
/**
 * 此函数在计数器值更改后立即获取第一个快照，第二个延迟为 delay
 * */ 
const { history, undo, redo, canUndo, canRedo } = useThrottledRefHistory(
    count, { deep: true, throttle: delay, capacity: 10, trailing: true, },
)
</script>