<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>
            <div>主要服务于库作者，安全onScopeDispose。onScopeDispose()如果它在效果范围生命周期内，则调用，如果不是，则不执行任何操作</div>
            <div>当组件卸载时，触发onUnmounted，此时onUnmounted与tryOnScopeDispose没有什么不同</div>
            <div>当effects自动销毁后，触发onScopeDispose。</div>
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

import { tryOnScopeDispose } from '@vueuse/core'

tryOnScopeDispose(() => {
    console.log("🚀 tryOnScopeDispose")
})
</script>