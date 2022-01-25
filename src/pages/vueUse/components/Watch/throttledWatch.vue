<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>节流watch</template>
        <template #codeEffect>
            <pre lang="yaml">节流每两秒只触发一次</pre>
            <el-input class="w-[200px]" v-model="source"></el-input>
            <pre lang="yaml">触发监听次数：{{ count }}</pre>
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
import { throttledWatch } from '@vueuse/core';


const source = ref('')
const count = ref(0)
throttledWatch(
    source,
    () => { count.value += 1 },
    { throttle: 2000 }
)
</script>