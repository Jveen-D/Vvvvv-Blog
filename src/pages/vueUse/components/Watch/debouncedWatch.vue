<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>watch防抖，这个对性能优化有多重要就不多说了吧</template>
        <template #codeEffect>
            <div class="w-[300px]">
                <el-input v-model="input"></el-input>
                <pre lang="yaml">input：{{ input }}</pre>
                <pre lang="yaml">监听次数：{{ updated }}</pre>
            </div>
        </template>
    </AvueUseBaseCom>
</template>
<script lang="ts" setup>
import AvueUseBaseCom from '../AvueUseBaseCom.vue'
// props
const props = defineProps<{
    id: number;
}>();

import { ref } from 'vue'
import { debouncedWatch } from '@vueuse/core'
const input = ref('')
const updated = ref(0)
debouncedWatch(input, () => {
    updated.value += 1
}, {
    debounce: 1000
})
</script>