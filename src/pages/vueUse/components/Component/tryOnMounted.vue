<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>安全onMounted。如果它在组件生命周期内，则调用onMounted()，如果不是，则运行只需调用该函数</template>
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

import { tryOnMounted } from '@vueuse/core'

tryOnMounted(() => {
    console.log("🚀 加载组件tryOnMounted")
})
</script>