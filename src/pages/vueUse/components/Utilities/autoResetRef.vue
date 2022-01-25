<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>autoResetRef一段时间之后重置ref</template>
        <template #codeEffect>
            <pre lang="yaml">一秒后重置ref</pre>
            <pre lang="yaml">message:{{ message }}</pre>
            <el-button @click="setMessage">setMessage</el-button>
        </template>
    </AvueUseBaseCom>
</template>
<script lang="ts" setup>
import { autoResetRef } from '@vueuse/core';
import AvueUseBaseCom from '../AvueUseBaseCom.vue';
// props
const props = defineProps<{
    id: number;
}>();

const message = autoResetRef('default message', 1000)
const setMessage = () => {
  message.value = 'message has set'
}
</script>