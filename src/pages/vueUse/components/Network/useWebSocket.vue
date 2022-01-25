<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>使用webSocket</template>
        <template #codeEffect>
            <pre lang="yaml">status：{{status}}</pre>
            <pre lang="yaml">data：{{data}}</pre>
            <el-button @clicl="()=>send()">send</el-button>
            <el-button @clicl="()=>open()">open</el-button>
            <el-button @clicl="()=>close()">close</el-button>
        </template>
    </AvueUseBaseCom>
</template>
<script lang="ts" setup>

import { useWebSocket } from '@vueuse/core';
import AvueUseBaseCom from '../AvueUseBaseCom.vue';
// props
const props = defineProps<{
    id: number;
}>();

const { status, data, send, open, close } = useWebSocket('ws://websocketurl')

</script>