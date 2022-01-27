<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>useWebWorker</template>
        <template #codeEffect>
            寄了，不会用
        </template>
    </AvueUseBaseCom>
</template>
<script lang="ts" setup>
import { useWebWorker } from '@vueuse/core';
import AvueUseBaseCom from '../../AvueUseBaseCom.vue';
// props
const props = defineProps<{
    id: number;
}>();

useWebWorker('/src/pages/vueUse/components/Misc/useWebWorker/worker.ts')
</script>