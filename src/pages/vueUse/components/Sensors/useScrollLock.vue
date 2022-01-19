<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>滚动区域锁定</template>
        <template #codeEffect>
            <div class="flex">
                <div ref="target" class="bg-gray-200 w-[260px] h-[420px] overflow-x-scroll">
                    <div class="w-[400px] h-[600px] relative">
                        <span class="absolute top-0 left-0 text-sky-500 dark:text-sky-400">left top</span>
                        <span
                            class="absolute top-0 right-0 text-sky-500 dark:text-sky-400"
                        >right top</span>
                        <span
                            class="absolute right-0 top-1/2 text-sky-500 dark:text-sky-400"
                        >left middle</span>
                        <span
                            class="absolute left-0 top-1/2 text-sky-500 dark:text-sky-400"
                        >right middle</span>
                        <span
                            class="absolute bottom-0 right-0 text-sky-500 dark:text-sky-400"
                        >right button</span>
                        <span
                            class="absolute bottom-0 left-0 text-sky-500 dark:text-sky-400"
                        >left bottom</span>
                    </div>
                </div>
                <div class="flex flex-col items-center flex-1">
                    <pre lang="yaml">是否锁定：{{ isLocked }}</pre>
                    <el-button @click="isLocked = !isLocked">点击{{ isLocked ? '解锁' : '锁定' }}</el-button>
                </div>
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

import { ref, reactive } from 'vue'
import { useScrollLock } from '@vueuse/core'
const target = ref<ElRef>(null)
const isLocked = reactive(useScrollLock(target))
</script>