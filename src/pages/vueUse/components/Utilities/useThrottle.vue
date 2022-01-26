<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>节流</template>
        <template #codeEffect>
            <pre lang="yaml">两秒内只执行一次</pre>
            <pre lang="yaml">count:{{throttled}}</pre>
            <el-button @click="addWithThrottled">addWithThrottled</el-button>
        </template>
    </AvueUseBaseCom>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useThrottle } from '@vueuse/core'
import AvueUseBaseCom from '../AvueUseBaseCom.vue';
// props
const props = defineProps<{
    id: number;
}>();

const count = ref(0)
const throttled = useThrottle(count, 2000)
const addWithThrottled = () => {
    count.value += 1
}

</script>