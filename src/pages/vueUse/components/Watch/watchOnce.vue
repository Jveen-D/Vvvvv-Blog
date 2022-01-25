<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>只监听一次</template>
        <template #codeEffect>
            <el-input class="w-[200px]" v-model="input"></el-input>
            <pre lang="yaml" v-if="stop">停止监听</pre>
        </template>
    </AvueUseBaseCom>
</template>
<script lang="ts" setup>
import AvueUseBaseCom from '../AvueUseBaseCom.vue';
// props
const props = defineProps<{
    id: number;
}>();

import { ref } from 'vue';
import { watchOnce } from '@vueuse/core';

const input = ref('')
const str = ref('')
const stop = ref(false)

watchOnce(input, () => {
    str.value = input.value
    stop.value = true
})
</script>