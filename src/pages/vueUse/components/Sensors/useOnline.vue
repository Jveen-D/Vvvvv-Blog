<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>网络online</template>
        <template #codeEffect>
            <pre lang="yaml">{{online}}</pre>
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
import { useOnline } from '@vueuse/core'

const online = reactive(useOnline())
</script>