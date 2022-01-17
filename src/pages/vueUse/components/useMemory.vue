<!--
 * @Date: 2022-01-17 16:45:34
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/pages/vueUse/components/useMemory.vue
-->
<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>内存信息</template>
        <template #codeEffect>
            <div v-if="isSupported && memory">
                <pre lang="yaml">使用js的内存大小usedJSHeapSize:{{ size(memory.usedJSHeapSize) }}</pre>
                <pre lang="yaml">总计使用js内存大小totalJSHeapSize：{{ size(memory.totalJSHeapSize) }}</pre>
                <pre lang="yaml">js内存大小限制jsHeapSizeLimit：{{ size(memory.jsHeapSizeLimit) }}</pre>
            </div>
            <div v-else>很遗憾，浏览器不支持此api</div>
        </template>
    </AvueUseBaseCom>
</template>

<script lang="ts" setup>
import AvueUseBaseCom from './AvueUseBaseCom.vue'
// props
const props = defineProps<{
    id: number;
}>();


import { useMemory } from '@vueuse/core'

const { isSupported, memory } = useMemory()


const size = (v: number) => {
    const kb = v / 1024 / 1024
    return `${kb.toFixed(2)} MB`
}
</script>