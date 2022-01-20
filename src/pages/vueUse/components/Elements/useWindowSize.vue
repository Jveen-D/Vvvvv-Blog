<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>响应式window尺寸，注意是window</template>
        <template #codeEffect>
            <div>{{ width + 'x' + height }}</div>
        </template>
    </AvueUseBaseCom>
</template>

<script lang="ts" setup>
import AvueUseBaseCom from '../AvueUseBaseCom.vue'
// props
const props = defineProps<{
    id: number;
}>();

import { useWindowSize } from '@vueuse/core'

const { width, height } = useWindowSize()
</script>

    