<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>
            <div>安全onUnmounted。onUnmounted()如果它在组件生命周期内，则调用，如果不是，则不执行任何操作</div>
        </template>
        <template #codeEffect>
            <div>打开控制台查看效果</div>
        </template>
    </AvueUseBaseCom>
</template>
<script lang="ts" setup>
import AvueUseBaseCom from '../AvueUseBaseCom.vue'
// props
const props = defineProps<{
    id: number;
}>();

import { tryOnUnmounted } from '@vueuse/core'

tryOnUnmounted(() => {
    console.log("🚀 tryOnUnmounted")
})
</script>