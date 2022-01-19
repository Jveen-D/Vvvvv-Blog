<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>网络信息</template>
        <template #codeEffect>
            <pre lang="yaml">{{network}}</pre>
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
import { useNetwork } from '@vueuse/core'

const network = reactive(useNetwork())
</script>