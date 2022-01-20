<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>响应式localStorage</template>
        <template #codeEffect>
            <div class="grid grid-rows-1 gap-2">
                <el-input v-model="state.name" type="text" />
                <el-input v-model="state.color" type="text" />
                <el-input v-model="state.size" type="text" />
            </div>
            <pre lang="yaml">{{ state }}</pre>
        </template>
    </AvueUseBaseCom>
</template>
<script lang="ts" setup>
import AvueUseBaseCom from '../AvueUseBaseCom.vue'
// props
const props = defineProps<{
    id: number;
}>();

import { useStorage } from '@vueuse/core'
const state = useStorage('vue-use-local-storage', {
    name: 'Banana',
    color: 'Yellow',
    size: 'Medium',
})
</script>