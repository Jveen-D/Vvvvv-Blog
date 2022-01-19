<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>鼠标是否离开页面，将鼠标划开看到效果</template>
        <template #codeEffect>
            <pre lang="yaml">{{isLeave}}</pre>
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
import { usePageLeave } from '@vueuse/core'

const isLeave = reactive(usePageLeave())
</script>