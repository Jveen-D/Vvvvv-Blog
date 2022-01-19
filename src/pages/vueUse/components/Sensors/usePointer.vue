<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>鼠标状态</template>
        <template #codeEffect>
            <pre lang="yaml">{{pointer}}</pre>
        </template>
    </AvueUseBaseCom>
</template>
<script lang="ts" setup>
import AvueUseBaseCom from '../AvueUseBaseCom.vue'
// props
const props = defineProps<{
    id: number;
}>();

import {reactive} from 'vue'
import { usePointer } from '@vueuse/core'

const pointer = reactive(usePointer())
</script>