<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>计时器</template>
        <template #codeEffect>
            <pre lang="yaml">现在就是刚刚的未来{{ counter }}s</pre>
            <el-button @click="() => pause()">暂停</el-button>
            <el-button @click="() => resume()">继续</el-button>
        </template>
    </AvueUseBaseCom>
</template>
<script lang="ts" setup>
import AvueUseBaseCom from '../AvueUseBaseCom.vue'
// props
const props = defineProps<{
    id: number;
}>();

import { useInterval } from '@vueuse/core'
const { counter, pause, resume } = useInterval(1000, { controls: true })
</script>