<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>当前时间</template>
        <template #codeEffect>
            <div class="flex flex-col items-center justify-center ">
                <div class="text-sky-500 dark:text-sky-400">{{ now }}</div>
                <div class="text-sky-500 dark:text-sky-400">{{ dayjs(now).format('YYYY-MM-DD hh:mm:ss') }}</div>
                <el-button v-if="!isActive" @click="() => resume()">开始</el-button>
                <el-button v-if="isActive" @click="() => pause()" class="text-white bg-orange-400 border border-orange-400 hover:text-sky-500">暂停</el-button>
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
import { useNow } from '@vueuse/core'
const { now, pause, resume, isActive } = useNow({ controls: true })
</script>