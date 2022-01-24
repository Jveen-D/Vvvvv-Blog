<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>信号更新</template>
        <template #codeEffect>
            <pre lang="yaml">value：{{ input }}</pre>
            <el-button @click="update">update</el-button>
            <el-button class="text-white bg-orange-400 border border-orange-400" @click="ignoredUpdate">ignoreUpdates信号更新</el-button>
            <el-button @click="clear">reset</el-button>
            <pre lang="yaml">Log</pre>
            <pre lang="yaml">{{ log }}</pre>
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
import { ignorableWatch } from '@vueuse/core'

const input = ref<ElRef>()
const log = ref('')
const source = ref(0)

const { ignoreUpdates } = ignorableWatch(
    source,
    v => (log.value += `Changed to "${v}"\n`),
    { flush: 'sync' },
)
const clear = () => {
    source.value = 0
    log.value = ''
}
const update = () => {
    source.value++
}
const ignoredUpdate = () => {
    ignoreUpdates(() => {
        source.value++
    })
}
</script>