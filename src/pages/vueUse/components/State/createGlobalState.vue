<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>创建全局状态，其实就是localStorage</template>
        <template #codeEffect>
            <pre lang="yaml">{{useGlobalState()}}</pre>
        </template>
    </AvueUseBaseCom>
</template>
<script lang="ts" setup>
import AvueUseBaseCom from '../AvueUseBaseCom.vue'
// props
const props = defineProps<{
    id: number;
}>();

import { createGlobalState, useStorage } from '@vueuse/core'
const useGlobalState = createGlobalState(()=>useStorage('vueuse-local-storage', 'initialValue'))
</script>