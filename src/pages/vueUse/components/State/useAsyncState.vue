<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>响应式异步状态</template>
        <template #codeEffect>
            <pre lang="yaml">{{ state }}</pre>
            <pre lang="yaml">isReady:{{ isReady }}</pre>
            <pre lang="yaml">isLoading:{{ isLoading }}</pre>
            <el-button @click="() => execute()">getData</el-button>
        </template>
    </AvueUseBaseCom>
</template>
<script lang="ts" setup>
import AvueUseBaseCom from '../AvueUseBaseCom.vue'
// props
const props = defineProps<{
    id: number;
}>();

import axios from 'axios'
import { useAsyncState } from '@vueuse/core'

const { state, isReady, isLoading, execute } = useAsyncState(
    (args) => {
        const id = args?.id || 1
        return axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`).then(t => t.data)
    },
    {},
    {
        delay: 20000,
        resetOnExecute: false,
    },
)

</script>