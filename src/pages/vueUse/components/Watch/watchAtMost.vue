<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>控制监听次数</template>
        <template #codeEffect>
            <pre lang="yaml">监听次数:{{ times }}</pre>
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
import { watchAtMost } from '@vueuse/core';

const times = ref(0)
const input = ref('')
const stop = ref(false)
watchAtMost(input, () => {
    times.value += 1
    if (times.value >= 10) {
        stop.value = true
    }
}, {
    count: 10
})
</script>