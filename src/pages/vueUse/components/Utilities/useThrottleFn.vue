<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>节流函数</template>
        <template #codeEffect>
            <pre lang="yaml">两秒内只执行一次</pre>
            <pre lang="yaml">count:{{ count }}</pre>
            <el-button @click="throttledFn">throttledFn</el-button>
        </template>
    </AvueUseBaseCom>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useThrottleFn } from '@vueuse/core'
import AvueUseBaseCom from '../AvueUseBaseCom.vue';
// props
const props = defineProps<{
    id: number;
}>();

const count = ref(0)
const throttledFn = useThrottleFn(() => {
    count.value += 1
}, 2000)

</script>