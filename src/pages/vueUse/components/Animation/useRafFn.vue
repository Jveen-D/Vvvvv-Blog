<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>在每个requestAnimationFrame控制暂停和恢复。一般作用域无限循环动画</template>
        <template #codeEffect>
            <div class="flex flex-col items-center justify-center ">
                <div class="text-sky-500 dark:text-sky-400">Count: {{ count }}</div>
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

import {ref} from 'vue'
import { useRafFn } from '@vueuse/core'
const count = ref(0)
const { pause, resume,isActive } = useRafFn(() => count.value += 1)
</script>