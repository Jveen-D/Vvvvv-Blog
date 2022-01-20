<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>文档可见性</template>
        <template #codeEffect>
            <div class="flex items-center justify-center w-full">{{ message }}</div>
        </template>
    </AvueUseBaseCom>
</template>

<script lang="ts" setup>
import AvueUseBaseCom from '../AvueUseBaseCom.vue'
// props
const props = defineProps<{
    id: number;
}>();

import { ref, Ref, watch } from 'vue'
import { useDocumentVisibility, useTimeoutFn } from '@vueuse/core';
const startMessage = '切换屏幕再返回查看效果'
const message: Ref<string> = ref(startMessage)
const visibility = useDocumentVisibility()

const timeout = useTimeoutFn(() => {
    message.value = startMessage
}, 3000)

watch(visibility, (current, previous) => {
    if (current === 'visible' && previous === 'hidden') {
        message.value = '🎉 Welcome back!'
        timeout.start()
    }
})
</script>

