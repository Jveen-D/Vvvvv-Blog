<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>暂停监听</template>
        <template #codeEffect>
            <div class="flex flex-col">
                <el-input ref="input" v-model="source" class="w-[200px]" />
                <div class="flex mt-2">
                    <el-button :disabled="!isActive" @click="pause">暂停</el-button>
                    <el-button
                        :disabled="isActive"
                        class="text-white bg-orange-400 border border-orange-400"
                        @click="resume"
                    >继续</el-button>
                    <el-button @click="clear">清除</el-button>
                </div>
                <pre lang="yaml">Log</pre>
                <pre lang="yaml">{{ log }}</pre>
            </div>
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
import { pausableWatch } from '@vueuse/core';

const input = ref<HTMLInputElement | null>()
const log = ref('')
const source = ref('')
const watcher = pausableWatch(
    source,
    v => (log.value += `Changed to "${v}"\n`),
)
const clear = () => {
    log.value = ''
}
const pause = () => {
    log.value += '暂停监听\n'
    watcher.pause()
}
const resume = () => {
    log.value += '继续监听\n'
    watcher.resume()
}
const { isActive } = watcher


</script>