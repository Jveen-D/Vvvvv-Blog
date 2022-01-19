<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>当前时间毫秒数</template>
        <template #codeEffect>
            <div class="flex flex-col items-center justify-center">
                <pre class="text-sky-500 dark:text-sky-400" lang="yaml">{{ timestamp }}</pre>
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

import { useTimestamp } from '@vueuse/core'

const timestamp = useTimestamp({ offset: 0 })
</script>