<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>建立长链接以text/event-stream发送事件</template>
        <template #codeEffect>
            <pre lang="yaml">status：{{status}}</pre>
            <pre lang="yaml">data：{{data}}</pre>
            <pre lang="yaml">error：{{error}}</pre>
            <el-button @clicl="()=>close()">close</el-button>
        </template>
    </AvueUseBaseCom>
</template>
<script lang="ts" setup>

import { useEventSource } from '@vueuse/core';
import AvueUseBaseCom from '../AvueUseBaseCom.vue';
// props
const props = defineProps<{
    id: number;
}>();

const { status, data, error, close } = useEventSource('https://event-source-url')

</script>