<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>手动跟踪 ref 的更改历史，还提供撤消和重做功能</template>
        <template #codeEffect>
            <div>count:{{count}}</div>
            <el-button class="px-8" @click="()=>inc()">+</el-button>
            <el-button class="px-8" @click="()=>dec()">-</el-button>
            <el-button class="px-8" @click="()=>commit()">提交</el-button>
            <el-button v-if="canUndo" @click="()=>undo()">撤消</el-button>
            <el-button v-if="canRedo" @click="()=>redo()">重做</el-button>
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
import { useManualRefHistory } from '@vueuse/core'
import { useCounter } from '@vueuse/shared'

const format = (ts: number) => dayjs(ts).format()
const { count, inc, dec } = useCounter()
const { history, undo, redo,commit, canUndo, canRedo } = useManualRefHistory(
    // capacity为限定历史次数，debounce为延迟时间
    count, { capacity: 10},
)
</script>